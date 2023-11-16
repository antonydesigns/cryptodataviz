import { db } from "@/app/(config)/firebase";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import parse from "html-react-parser";
import { cache } from "react";

import type {
  ParsedPageContentType,
  PageContentType,
} from "@/app/(utils)/types";

export default class ContentBoxModel {
  rawData: PageContentType[] = [];
  content: ParsedPageContentType[] = [];
  dataAvailable = false;
  revalidate = 0;
  locationID = 0;

  constructor(locationID: number) {
    this.locationID = locationID;
    this.getContent = cache(this.getContent.bind(this));
  }

  async init(): Promise<void> {
    if (!this.dataAvailable) {
      try {
        await this.getRawData();
        this.constructHTML();
        this.dataAvailable = true;
      } catch (error) {
        console.error("Error initializing model:", error);
        throw error; // Propagates the error to the caller
      }
    } else {
      console.error("Model already initialized");
    }
  }

  async getContent(): Promise<ParsedPageContentType[]> {
    return this.content;
  }

  // GET CONTENT BY LOCATION
  private async getRawData() {
    try {
      const q = query(
        collection(db, "pageContent"),
        where("locationID", "==", this.locationID),
        orderBy("order", "asc")
      );
      const data = await getDocs(q);
      const pageContent: PageContentType[] = [];
      data.forEach((doc) => {
        const content = doc.data() as PageContentType;
        let id = doc.id;
        pageContent.push({ ...content, id: id });
      });
      this.rawData = pageContent;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // GET ALL WHERE

  // PROCESSING

  private constructHTML() {
    const raw = this.rawData;
    let result: ParsedPageContentType[] = [];
    raw.forEach((line) => {
      let id = line.id;
      let contentString = line.content;
      let content = parse(contentString);
      let original = contentString;
      let locationID = line.locationID;
      let order = line.order;
      result.push({
        id: id,
        content: content,
        original: original,
        locationID: locationID,
        order: order,
      });
    });
    this.content = result;
  }
}
