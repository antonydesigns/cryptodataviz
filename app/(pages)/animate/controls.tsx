"use client";

import {
  motion,
  AnimatePresence,
  MotionConfig,
  useAnimationControls,
} from "framer-motion";

import React, { useState } from "react";

export default function Controls() {
  const controls = useAnimationControls();

  const rightClick = () => {
    controls.start("right");
  };

  const leftClick = () => {
    controls.start("left");
  };

  const centerClick = () => {
    controls.start("initial");
  };

  return (
    <div className="parent min-h-[200vh]">
      <button
        onClick={leftClick}
        className="mb-11 border border-black rounded-md py-1 px-3 bg-green-200"
      >
        Go left{" "}
      </button>
      <button
        onClick={centerClick}
        className="mb-11 border border-black rounded-md py-1 px-3 bg-green-200"
      >
        Return center
      </button>
      <button
        onClick={rightClick}
        className="mb-11 border border-black rounded-md py-1 px-3 bg-green-200"
      >
        Go right
      </button>
      <AnimatePresence mode="popLayout">
        <div className="border border-black w-[200px] h-[200px] ">
          <motion.div
            className="w-[150px] h-[150px] bg-sky-400 absolute translate-y-10"
            animate={controls}
            variants={{
              initial: {
                x: 0,
              },
              right: {
                x: 100,
              },
              left: {
                x: -100,
              },
            }}
          ></motion.div>
          <div className="w-[150px] h-[150px] bg-red-300 absolute translate-y-0 translate-x-10"></div>
        </div>
      </AnimatePresence>

      <motion.div layout className="mt-10">
        <p>Hello world</p>
        <p>Hello again</p>
      </motion.div>
    </div>
  );
}
