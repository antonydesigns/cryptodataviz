"use client";

import Section from "@/components/custom/Section";
import SceneButtons from "./play/scenes/SceneButtons";
import Link from "next/link";

export default function BlockchainExplained() {
  const textContent = {
    heading: "Understanding blockchain",
    body: [
      `To understand why Bitcoin and other cryptocurrencies have value, you need to understand <strong>blockchain</strong>.
    `,
      `But what the heck is it? In this interactive visual guide, you'll learn what blockchain is, how it works, and why it is a valuable piece of technology.`,
      `Click on <strong>Next</strong> to go to the next scene. If you ever want to back to the previous scenes, just click on <strong>Back</strong>.`,
    ],
  };

  return (
    <div className="">
      <Section content={textContent} />
      <Link href="/blockchain-explained/play">
        <button
          className={`border rounded-md p-2 mr-2 hover:bg-green-200 bg-green-100 border-black`}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
