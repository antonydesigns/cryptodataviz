"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene2() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "A currency is born...",
    body: [
      `Despite this, the students have found a clever way to get around this rule. At first, they simply barter for goods. Cookies for cupcakes, Science homework for Math homework, etc.`,
      `Later, they all agree that candy bars (unopened) have value. So, they started using candy bars as currency to sell each other goods and services. 
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
