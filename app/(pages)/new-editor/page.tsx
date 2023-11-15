import { db } from "@/app/(config)/firebase";
import { PageContentType } from "@/app/(utils)/types";
import { getDocs, collection } from "firebase/firestore";
import { cache } from "react";
import NewEditorComponent from "./component";

export default async function NewEditorPage() {
  const pageContent: PageContentType[] = await getItem();

  return (
    <>
      {pageContent &&
        pageContent.map((line) => <div key={line.id}>{line.content}</div>)}
    </>
  );
}

export const revalidate = 0; // revalidate the data at every request

const getItem = cache(async () => {
  const data = await getDocs(collection(db, "pageContent"));
  const pageContent: PageContentType[] = [];
  data.forEach((doc) => {
    const content = doc.data() as PageContentType;
    let id = doc.id;
    pageContent.push({ ...content, id: id });
  });
  return pageContent;
});
