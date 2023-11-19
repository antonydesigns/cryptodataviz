"use client";

import React from "react";
import { SceneStore } from "./scenes/store";

export default function PlayBlockchainExplained() {
  const sceneNumber = SceneStore((store) => store.sceneNumber);
  const scenes = SceneStore((store) => store.scenes);

  return <>{scenes && scenes[sceneNumber]?.content}</>;
}
