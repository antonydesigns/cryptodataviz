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
  const setIsComplete = SceneStore((store) => store.setIsComplete);

  const scenes = SceneStore((store) => store.scenes);
  const progressCounter = SceneStore((store) => store.progressCounter);

  useEffect(() => {
    if (progressCounter > sceneNumber) {
      setIsComplete(true);
    } else {
      setIsComplete(!task);
    }
  }, [sceneNumber]);

  return (
    <>
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
      <SceneButtons complete={isComplete} />
      Progress: {progressCounter + 1} of {scenes.length}
      {task && <CompleteButton />}
    </>
  );
}
