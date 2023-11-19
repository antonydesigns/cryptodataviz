"use client";

import { SceneStore } from "./scenes/store";

export default function Animate() {
  const sceneNumber = SceneStore((store) => store.sceneNumber);
  const scenes = SceneStore((store) => store.scenes);

  const progressCounter = SceneStore((store) => store.progressCounter);

  return (
    <>
      <p>Scene number: {sceneNumber + 1}</p>
      <p>Progress: {progressCounter + 1}</p>
      <>{scenes[sceneNumber]?.content}</>
    </>
  );
}
