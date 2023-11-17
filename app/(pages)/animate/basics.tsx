import React from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function Basics() {
  return (
    <div>
      <MotionConfig
        transition={{
          duration: 3,
          ease: "backInOut",
        }}
      >
        <motion.div
          className="w-[150px] h-[150px] bg-black"
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "70deg" }}
          exit={{ rotate: "0deg" }}
        ></motion.div>
        <motion.div
          className="w-[150px] h-[150px] bg-black"
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "70deg" }}
          exit={{ rotate: "0deg" }}
          transition={{
            duration: 1.5,
            ease: "backInOut",
          }}
        ></motion.div>{" "}
      </MotionConfig>
    </div>
  );
}
