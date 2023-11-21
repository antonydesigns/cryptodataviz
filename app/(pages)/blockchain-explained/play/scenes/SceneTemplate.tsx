"use client";

import { SceneStore } from "./store";
import SceneButtons from "./SceneButtons";
import Section from "@/components/custom/Section";
import { useEffect } from "react";
import CompleteButton from "./CompleteButton";

type ContentType = {
  heading: string;
  body: string[];
};

export default function SceneTemplate({
  task,
  children,
  textContent,
  isComplete,
}: {
  task: boolean;
  children?: React.ReactNode;
  textContent: ContentType;
  isComplete: boolean;
}) {
  const sceneNumber = SceneStore((store) => store.sceneNumber);
  const setSceneNumber = SceneStore((store) => store.setSceneNumber);
  const setIsComplete = SceneStore((store) => store.setIsComplete);

  const scenes = SceneStore((store) => store.scenes);
  const progressCounter = SceneStore((store) => store.progressCounter);
  const setProgressCounter = SceneStore((store) => store.setProgressCounter);

  useEffect(() => {
    if (progressCounter > sceneNumber) {
      setIsComplete(true);
    } else {
      setIsComplete(!task);
    }
  }, [sceneNumber]);

  const jump = 19;

  return (
    <>
      <button
        onClick={() => {
          setSceneNumber(jump - 1);
          setProgressCounter(jump - 1);
        }}
      >
        Jump to WIP Scene
      </button>
      <div className="min-h-[69vh]">
        <div className="underline">
          <p>
            Progress: {progressCounter + 1} of {scenes.length}
          </p>
          <p>
            Scene: {sceneNumber + 1} of {scenes.length}
          </p>
        </div>

        <div className="mt-3">
          <Section content={textContent} />
        </div>
        {children}
      </div>
      <div className="mt-4">
        <SceneButtons complete={isComplete} />
      </div>
      Progress: {progressCounter + 1} of {scenes.length}
      {task && <CompleteButton />}
    </>
  );
}
