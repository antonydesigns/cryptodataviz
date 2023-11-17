"use client";

import {
  motion,
  AnimatePresence,
  MotionConfig,
  useAnimationControls,
  useAnimate,
  usePresence,
} from "framer-motion";

import React, { useEffect, useState } from "react";

export default function AnimatePage() {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isPresent) {
      (async () => {
        await animate("h1.me", { color: "green" });
      })();
    } else {
      (async () => {
        await animate("h1", { opacity: 0 });
        safeToRemove();
      })();
    }
  }, [isPresent]);

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Show/Hide
      </button>
      <h1>Hello</h1>
      <AnimatePresence>
        <div ref={scope}>
          <h1 className="me">World</h1>
          <h1>I'm</h1>
        </div>
      </AnimatePresence>

      <h1>Gio</h1>
      <div className="min-h-[100vh]"></div>
    </>
  );
}
