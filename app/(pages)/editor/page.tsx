import ContentBoxComponent, { getData } from "./ContentBox/component";

export default async function EditorPage() {
  const content = await getData();

  return (
    <>
      <p>This is actually the unstable version</p>
      <ContentBoxComponent content={content} />
    </>
  );
}
