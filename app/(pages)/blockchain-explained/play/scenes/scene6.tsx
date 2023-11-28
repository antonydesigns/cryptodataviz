"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene6() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `Bob then assembles 10 volunteers who are referred to as <strong>Listeners</strong>. 
      `,
      `Each Listener has their own copy of the grimcoin ledger, and each can only <strong>edit their own copy.</strong> `,
    ],
  };

  return (
    <>
      <SceneTemplate
        task={false}
        textContent={textContent}
        isComplete={isComplete}
      ></SceneTemplate>
    </>
  );
}
