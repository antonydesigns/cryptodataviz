"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene11() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "Backing up data",
    body: [
      `To do so, they pick a random number. One Listener will be lucky. They will be the one to overwrite the notes of the other nine Listeners. In this way, the content of each Listener's ledger will be <strong>100% identical</strong> by the end of the day.
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
