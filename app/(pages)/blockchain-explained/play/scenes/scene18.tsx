"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene18() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `The consensus protocol is one of the key things that make blockchains secure and valuable. 
      `,
      `Even <strong>without an official authority</strong> (e.g. from a government) to oversee operations, validators (who are often strangers to each other) could work together without ever needing to trust one other. 
      `,
      `Because what keeps the network's integrity are <strong>strict computer programs</strong> that should benefit everyone if the protocols are being followed properly.
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
