"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene13() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `How much should each grimcoin be worth? That's one to be decided by the market…
      `,
      `But what's more important is that grimcoins were becoming a reliable currency for the school. No single person can cheat in this system and forge grimcoins. Not even Bob. 
      `,
      `The only way to transfer coins is through the Listeners, who strictly adhere to their daily routines of comparing notes and staying in the loop.
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
