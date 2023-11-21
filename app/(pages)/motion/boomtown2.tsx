import React from "react";
import { motion } from "framer-motion";

export default function BoomTown2() {
  return (
    <div className="SCENE w-[100%] md:w-[50%] ">
      <svg
        viewBox="0 0 118 123"
        style={{
          height: "100%",
          width: "100%",
          border: "1px solid black",
        }}
      >
        <g xmlns="http://www.w3.org/2000/svg" id="Frame 3">
          <rect width="118" height="123" fill="white" opacity={0} />
          <g id="Group 1">
            <motion.circle
              style={{
                originX: 0.5,
                originY: 0.5,
              }}
              id="Mars Orbit"
              cx="59"
              cy="66"
              r="45"
              fill="#D9D9D9"
            />
            <motion.circle
              style={{
                originX: "59px",
                originY: "66px",
                originZ: "100px",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: 1,
                duration: 2,
                ease: "linear",
              }}
              id="Mars"
              cx="58.5"
              cy="21.5"
              r="9.5"
              fill="url(#paint0_linear_0_1)"
            />
          </g>
        </g>
        <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient
            id="paint0_linear_0_1"
            x1="58.5"
            y1="12"
            x2="58.5"
            y2="31"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFB0B0" />
            <stop offset="1" stop-color="#320909" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
