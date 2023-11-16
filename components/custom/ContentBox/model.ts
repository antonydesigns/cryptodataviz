import { db } from "@/app/(config)/firebase";
import { getDocs, collection } from "firebase/firestore";
import parse from "html-react-parser";
import type {
  ParsedPageContentType,
  PageContentType,
} from "@/app/(utils)/types";
import { cache } from "react";

export default class ContentBoxModel {
  rawData: PageContentType[] = [];
  content: ParsedPageContentType[] = [];
  dataAvailable = false;
  revalidate = 0;

  constructor() {
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

  // GET ALL
  private async getRawData() {
    try {
      const data = await getDocs(collection(db, "pageContent"));
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

  private constructHTML() {
    const raw = this.rawData;
    let result: ParsedPageContentType[] = [];
    raw.forEach((line) => {
      let id = line.id;
      let contentString = line.content;
      let content = parse(contentString);
      let original = contentString;
      let locationID = line.locationID;
      result.push({
        id: id,
        content: content,
        original: original,
        locationID: locationID,
      });
    });
    this.content = result;
  }
}
