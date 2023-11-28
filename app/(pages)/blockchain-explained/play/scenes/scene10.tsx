"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene10() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "Backing up data",
    body: [
      `The Listeners must decide whose note they will use from today's collection, to be added on top of past transactions on the grimcoin ledger.
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
