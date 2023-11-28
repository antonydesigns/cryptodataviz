"use client";

import { SceneStore } from "./store";
import SceneTemplate from "./SceneTemplate";

export default function Scene15() {
  const isComplete = SceneStore((store) => store.isComplete);
  const textContent = {
    heading: "",
    body: [
      `Like the Listeners in our metaphor, volunteers around the world run computers that listen to and process crypto transactions independently. 
      `,
      `Every time they listen to a transaction, the message gets passed around the network until everyone is up-to-date with the latest transactions. Transactions are bundled into <strong>blocks</strong>.
      `,
      `"Volunteers" in this context are better known as <strong>"validators"</strong>.
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
