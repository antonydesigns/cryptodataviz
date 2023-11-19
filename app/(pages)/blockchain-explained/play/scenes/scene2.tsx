"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene2() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `Despite this, the students have found a clever way to get around this rule. At first, they simply barter for goods. Cookies for cupcakes, Science homework for Math homework, etc.`,
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
