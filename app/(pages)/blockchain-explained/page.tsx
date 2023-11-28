import Section from "@/components/custom/Section";
import LinkToFirstScene from "./play/scenes/LinkToFirstScene";

export default function BlockchainExplained() {
  const textContent = {
    heading: "Understanding blockchain",
    body: [
      `To understand why Bitcoin and other cryptocurrencies have value, you need to understand <strong>blockchain</strong>.
    `,
      `But what the heck is it? In this interactive course, you'll learn what blockchain is, how it works, and why it is such a valuable piece of technology.`,
      `Click <strong>Next</strong> as you progress through the course. If you ever want to back to the previous scenes, just click <strong>Back</strong>.`,
    ],
  };

  const start = {
    heading: "",
    body: ["Click on <strong>Play</strong> to start the course."],
  };

  return (
    <div className="">
      <Section content={textContent} />
      <div className="flex mt-5">
        <LinkToFirstScene />
        <Section content={start} />
      </div>
    </div>
  );
}
