import { ParsedPageContentType } from "@/app/(utils)/types";
import ContentBoxModel from "../../new-editor/model";
import ContentBoxView from "./view";

export async function getData(): Promise<ParsedPageContentType[]> {
  try {
    const model = new ContentBoxModel();
    await model.init();
    return model.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getServerSideProps() {
  // Fetch data, parse data, and return it

  const content = await getData();

  return { props: { content } };
}

export default function ContentBoxComponent({
  content,
}: {
  content: ParsedPageContentType[];
}) {
  // Pass the resulting array as a prop to View (client component)
  return (
    <>
      {content &&
        content?.map((line) => <div key={line.id}>{line.content}</div>)}

      {/*  <ContentBoxView contentProp={content} /> */}
    </>
  );
}
