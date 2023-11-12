import { db } from "@/app/(config)/firebase";
import { getDocs, collection } from "firebase/firestore";
import parse from "html-react-parser";
import type { ParsedHTMLStringType } from "@/app/(utils)/types";
import { ContentBoxStore } from "./store";

type PageContentType = {
  id: string;
  content: string;
  locationID: number;
};

type ParsedPageContentType = {
  id: string;
  content: ParsedHTMLStringType;
  original: string;
  locationID: number;
};

export default class ContentBoxModel {
  unparsed: PageContentType[] = [];

  // Global Getters
  rawData: PageContentType[] = ContentBoxStore((store) => store.rawData);
  content: ParsedPageContentType[] = ContentBoxStore((store) => store.content);
  dataAvailable: boolean = ContentBoxStore((store) => store.dataAvailable);

  // Global Setters
  setRawData = ContentBoxStore((store) => store.setRawData);
  setContent = ContentBoxStore((store) => store.setContent);
  setDataAvailable = ContentBoxStore((store) => store.setDataAvailable);

  init() {
    if (!this.dataAvailable) {
      (async () => {
        await this.getContent();
        this.constructHTML();
        this.setDataAvailable(true);
      })();
    } else {
      console.error("Model already initialized");
    }
  }

  private async getContent() {
    try {
      const data = await getDocs(collection(db, "pageContent"));
      const pageContent: PageContentType[] = [];
      data.forEach((doc) => {
        const content = doc.data() as PageContentType;
        let id = doc.id;
        pageContent.push({ ...content, id: id });
      });
      this.setRawData(pageContent);
      this.unparsed = pageContent;
    } catch (error) {
      console.log(error);
    }
  }

  private constructHTML() {
    const raw = this.unparsed;
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
    this.setContent(result);
  }
}
