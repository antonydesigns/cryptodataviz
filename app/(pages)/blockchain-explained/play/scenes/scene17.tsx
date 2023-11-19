"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene17() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `In Proof of Stake, each validator must deposit a large sum of crypto asset to prove that they are committed to do their job properly. So, <strong>a lot is at stake</strong> to maintain the network's integrity.
      `,
      `If a validator is caught cheating (e.g. manipulating transaction messages, not following the protocol), they will <strong>pay a heavy penalty</strong> with their staked assets.
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
