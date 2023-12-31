"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";
import SVG_Scene3 from "../SVGs/scene3";

export default function Scene3() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "A currency is banned...",
    body: [
      `Unfortunately, they encounter two problems:`,
      `<strong>First problem</strong>: Candy bars that are broken, torn, or nearly expired don't have value. This type of currency doesn't make for a good long-term store of value. 
      `,
      `<strong>Second problem</strong>: The teachers have taken notice of the candy bar transactions! Candy bars are now banned from school grounds.
      `,
    ],
  };

  return (
    <>
      <SceneTemplate
        task={false}
        textContent={textContent}
        isComplete={isComplete}
      >
        <SVG_Scene3 />
      </SceneTemplate>
    </>
  );
}
