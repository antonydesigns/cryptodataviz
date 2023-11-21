"use client";

import { motion } from "framer-motion";

import React from "react";

export default function Example() {
  return (
    <div>
      <svg
        style={{
          width: 200,
          height: 200,
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: 30,
        }}
      >
        <motion.path
          style={{
            stroke: "#70f",
            strokeWidth: 20,
            strokeLinecap: "round",
            fill: "transparent",
          }}
          d="M 40,40 Q 160,40 160,160"
          animate={{
            d: [
              "M 40,40 Q 160,40 160,160",
              "M 160,40 Q 100,100 40,160",
              "M 160,160 Q 100,160 40,160",
              "M 160,40 Q 100,160 40,40",
              "M 160,40 Q 100,40 40,40",
              "M 50,40 Q 160,40 160 40",
            ],
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 6,
            times: [0, 0.16, 0.33, 0.5, 0.66, 0.83],
          }}
        />
      </svg>
    </div>
  );
}
