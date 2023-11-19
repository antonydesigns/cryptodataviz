"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene14() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "Blockchain is [  distributed   ] [ ledger ]  ",
    body: [
      `Grimcoin is a metaphor for digital currencies like Bitcoin, Ether, Dogecoin, and more.
      `,
      `Cryptocurrencies are recorded on a special <strong>ledger</strong> called a blockchain. Another thing that makes this ledger special is that it's <strong>distributed</strong> and gets updated periodically. 
      `,
      `Complete the first sentence above to continue…
      `,
    ],
  };

  return (
    <>
      <SceneTemplate
        task={true}
        textContent={textContent}
        isComplete={isComplete}
      ></SceneTemplate>
    </>
  );
}
