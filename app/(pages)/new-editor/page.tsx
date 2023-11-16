import { ParsedPageContentType } from "@/app/(utils)/types";
import ContentBoxModel from "../../../components/custom/ContentBox/model";

export const revalidate = 0; // revalidate the data at every request

export default async function NewEditorPage() {
  const locationID = 10;
  const model = new ContentBoxModel(locationID);
  await model.init();
  const pageContent: ParsedPageContentType[] = await model.getContent();

  return (
    <>
      {pageContent &&
        pageContent.map((line) => <div key={line.id}>{line.content}</div>)}
    </>
  );
}
