import ContentBoxComponent, { getData } from "./ContentBox/component";

export default async function EditorPage() {
  const content = await getData();

  return (
    <>
      <ContentBoxComponent content={content} />
      <p>hello</p>
    </>
  );
}
