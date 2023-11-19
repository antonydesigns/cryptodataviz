"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { SceneStore } from "./store";

export default function LinkToFirstScene() {
  const setSceneNumber = SceneStore((store) => store.setSceneNumber);
  const setProgressCounter = SceneStore((store) => store.setProgressCounter);

  function handleClick() {}

  useEffect(() => {
    setSceneNumber(0);
    setProgressCounter(0);
  }, [handleClick]);

  return (
    <>
      <Link href="/blockchain-explained/play">
        <button
          onClick={handleClick}
          className={`border rounded-md p-2 mr-2 hover:bg-green-200 bg-green-100 border-black`}
        >
          Play
        </button>
      </Link>
    </>
  );
}
