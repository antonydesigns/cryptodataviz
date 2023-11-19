"use client";

import Section from "@/components/custom/Section";
import SceneButtons from "./play/scenes/SceneButtons";
import Link from "next/link";
import LinkToFirstScene from "./play/scenes/LinkToFirstScene";

export default function BlockchainExplained() {
  const textContent = {
    heading: "Understanding blockchain",
    body: [
      `To understand why Bitcoin and other cryptocurrencies have value, you need to understand <strong>blockchain</strong>.
    `,
      `But what the heck is it? In this interactive visual guide, you'll learn what blockchain is, how it works, and why it is a valuable piece of technology.`,
      `Click <strong>Next</strong> as you progress through the scenario. If you ever want to back to the previous scenes, just click on <strong>Back</strong>.`,
    ],
  };

  const start = {
    heading: "",
    body: ["Click on <strong>Play</strong> to start."],
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
