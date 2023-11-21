"use client";

import { motion, useAnimate, usePresence } from "framer-motion";
import React, { useEffect } from "react";

export default function MotionPage() {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  /*   useEffect(() => {
    if (isPresent) {
      (async () => {
        animate(
          "#roof",
          {
            y: [0, -40, 0],
          },
          { duration: 2, repeat: Infinity }
        );
      })();
    } else {
      safeToRemove();
    }
  }, []); */

  return (
    <>
      <div className="flex justify-center items-center">
        <div ref={scope} className="SCENE w-[100%] md:w-[50%]">
          <svg
            id="hello"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            style={{
              height: "100%",
              width: "100%",
              border: "1px solid black",
            }}
          >
            <g id="house">
              <rect x="50" y="100" width="100" height="80" fill="orange" />
              <motion.polygon
                animate={{
                  y: [0, -40, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                id="roof"
                points="45,100 155,100 100,40"
                fill="red"
              />
              <rect x="80" y="120" width="40" height="60" fill="brown" />
            </g>

            <g id="tree">
              <rect x="20" y="110" width="30" height="80" fill="brown" />
              <circle cx="35" cy="110" r="30" fill="green" />
            </g>

            <g id="person">
              <circle cx="120" cy="170" r="20" fill="blue" />
              <line
                x1="120"
                y1="170"
                x2="120"
                y2="130"
                stroke="black"
                strokeWidth="3"
              />
              <line
                x1="120"
                y1="140"
                x2="105"
                y2="160"
                stroke="black"
                strokeWidth="3"
              />
              <line
                x1="120"
                y1="140"
                x2="135"
                y2="160"
                stroke="black"
                strokeWidth="3"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
