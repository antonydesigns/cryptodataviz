import { db } from "@/app/(config)/firebase";
import { ParsedPageContentType } from "@/app/(utils)/types";
import { getDocs, collection } from "firebase/firestore";
import { cache } from "react";
import ContentBoxModel from "./model";
import NewEditorComponent from "./component";

export const revalidate = 0; // revalidate the data at every request

export default async function NewEditorPage() {
  const model = new ContentBoxModel();
  await model.init();
  const pageContent: ParsedPageContentType[] = await model.getContent();

  return (
    <>
      {pageContent &&
        pageContent.map((line) => <div key={line.id}>{line.content}</div>)}
    </>
  );
}
