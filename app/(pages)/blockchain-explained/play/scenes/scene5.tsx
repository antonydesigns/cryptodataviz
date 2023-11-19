"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene5() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `Here is how grimcoin works:`,
      `Bob has a website with all the information about who owns how many grimcoins. Even though Bob is the creator of grimcoin, he doesn't have the authority to add transaction records and update balances. `,
      `His website is only a window to see the <strong>grimcoin ledger</strong>.
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
