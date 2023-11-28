"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene16() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `Periodically, the validators decide on which <strong>transaction block</strong> is the official one to be added to all copies of the distributed ledger — a process known as <strong>consensus</strong>. 
      `,
      `Different blockchain networks have their own consensus protocols, but the most common is <strong>Proof of Stake</strong>.
      `,
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
