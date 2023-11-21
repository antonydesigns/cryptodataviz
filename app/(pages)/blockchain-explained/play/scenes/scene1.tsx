"use client";

import { useEffect } from "react";
import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";
import SVG_Scene1 from "../SVGs/scene1";

export default function Scene1() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "Blockchain is …?",
    body: [
      `Imagine a school with a very strict policy. In this school, students aren't allowed to do business, such as selling cookies for real dollars. After all, it's a place of learning, to prepare students for the real world… 
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
        <div className="interaction w-[100%] mt-5">
          <SVG_Scene1 />
        </div>
      </SceneTemplate>
    </>
  );
}
