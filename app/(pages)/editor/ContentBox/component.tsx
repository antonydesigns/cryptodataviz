import { ParsedPageContentType } from "@/app/(utils)/types";
import ContentBoxModel from "./model";
import ContentBoxView from "./view";

export default async function ContentBoxComponent() {
  // Fetch data, parse data, and return it
  async function getData(): Promise<ParsedPageContentType[]> {
    try {
      const model = new ContentBoxModel();
      await model.init();
      return model.content;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  const content = await getData();

  // Pass the resulting array as a prop to View (client component)
  return (
    <>
      {content &&
        content?.map((line) => <div key={line.id}>{line.content}</div>)}

      <ContentBoxView contentProp={content} />
    </>
  );
}
