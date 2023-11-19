"use client";

import { useEffect, useState } from "react";
import { SceneStore } from "./store";
import SceneButtons from "./SceneButtons";
import CompleteButton from "./CompleteButton";

export default function Scene5() {
  const sceneNumber = SceneStore((store) => store.sceneNumber);

  const isComplete = SceneStore((store) => store.isComplete);
  const setIsComplete = SceneStore((store) => store.setIsComplete);

  const progressCounter = SceneStore((store) => store.progressCounter);

  useEffect(() => {
    if (progressCounter > sceneNumber) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [sceneNumber]);

  return (
    <>
      <CompleteButton />
      <SceneButtons complete={isComplete} />
    </>
  );
}
