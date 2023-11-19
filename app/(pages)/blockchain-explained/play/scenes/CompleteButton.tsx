import React from "react";
import { SceneStore } from "./store";

export default function CompleteButton() {
  const isComplete = SceneStore((store) => store.isComplete);
  const setIsComplete = SceneStore((store) => store.setIsComplete);

  return (
    <>
      <button
        className="border border-black p-2 my-3"
        onClick={() => setIsComplete(!isComplete)}
      >
        Complete: {isComplete ? "true" : "false"}
      </button>
    </>
  );
}
