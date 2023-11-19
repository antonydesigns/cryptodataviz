"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene4() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `Bob, a smart kid who knows about computers, proposes a plan. 
      `,
      `He's going to create a new currency called <strong>grimcoins</strong>, named after the school's strict principal, Mrs. Victoria Grimm. Bob is confident that grimcoins cannot be banned, because it will exist on the Internet. It's a digital currency that cannot be taken away.
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
