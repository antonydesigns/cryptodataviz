import { useEffect, useState } from "react";
import { SceneStore } from "./store";

interface SceneButtonsInterface {
  complete: boolean;
}

export default function SceneButtons({ complete }: SceneButtonsInterface) {
  const sceneNumber = SceneStore((store) => store.sceneNumber);
  const setSceneNumber = SceneStore((store) => store.setSceneNumber);
  const scenes = SceneStore((store) => store.scenes);
  const [prevButton, setPrevButton] = useState(true);
  const [nextButton, setNextButton] = useState(true);
  const [repeat, setRepeat] = useState(false);

  const progressCounter = SceneStore((store) => store.progressCounter);
  const setProgressCounter = SceneStore((store) => store.setProgressCounter);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.currentTarget.name;
    if (button === "next") {
      if (!complete) return;
      if (sceneNumber < scenes.length - 1) setSceneNumber(sceneNumber + 1);
    } else if (button === "prev") {
      if (sceneNumber > 0) {
        setSceneNumber(sceneNumber - 1);
      }
    } else {
      setSceneNumber(0);
      setProgressCounter(0);
    }
  }

  useEffect(() => {
    if (sceneNumber > progressCounter) setProgressCounter(progressCounter + 1);

    if (!complete) {
      setNextButton(false);
    } else if (sceneNumber === scenes.length - 1) {
      setNextButton(false);
      setRepeat(true);
    } else {
      setNextButton(true);
      setRepeat(false);
    }

    if (sceneNumber === 0) {
      setPrevButton(false);
      setRepeat(false);
    } else {
      setPrevButton(true);
    }
  }, [sceneNumber, complete]);

  return (
    <div>
      {
        <button
          disabled={!prevButton}
          className={`border rounded-md p-2 mr-2 ${
            prevButton
              ? ` hover:bg-yellow-200 bg-yellow-100 border-black`
              : ` bg-gray-200 text-gray-400 border-gray-200`
          }`}
          name="prev"
          onClick={(e) => handleClick(e)}
        >
          Back
        </button>
      }
      {
        <button
          disabled={!nextButton}
          className={`border rounded-md p-2 mr-2 ${
            nextButton
              ? ` hover:bg-green-200 bg-green-100 border-black`
              : ` bg-gray-200 text-gray-400 border-gray-200`
          }`}
          name="next"
          onClick={(e) => handleClick(e)}
        >
          Next
        </button>
      }
      {repeat && (
        <button
          className={`border rounded-md p-2 mr-2 ${
            repeat
              ? ` hover:bg-green-200 bg-green-100 border-black`
              : ` bg-gray-200 text-gray-400 border-gray-200`
          }`}
          name="repeat"
          onClick={(e) => handleClick(e)}
        >
          Repeat
        </button>
      )}
    </div>
  );
}
