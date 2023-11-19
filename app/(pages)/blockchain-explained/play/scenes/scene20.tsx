"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene20() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "You're now a blockchain expert :) ",
    body: [
      `Thank you for following along this course. If you enjoyed it, let me know and stay tuned for more updates on this site!`,
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
