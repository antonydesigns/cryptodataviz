"use client";

import { useEffect } from "react";
import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

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
      ></SceneTemplate>
    </>
  );
}
