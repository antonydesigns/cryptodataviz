"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene15() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "Blockchain in a nutshell..",
    body: [
      `To summarize, a blockchain is a distributed digital ledger. `,
      `The goal of blockchains is to provide proof of ownership of digital assets.`,
      `Adding a record to the blockchain involves communicating with a network of validators.`,
      `Validators independently and freely bundle transactions into a block (a working draft).`,
      `At a pre-determined period (called block time), validators choose among themselves to be a "block leader".`,
      `A block leader makes their draft block "official", which means all other validators must discard their drafts and insert this block on top of their own blockchain.`,
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
