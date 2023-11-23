"use client";

import React, { useEffect, useState } from "react";
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  AnimatePresence,
  stagger,
} from "framer-motion";

export default function AirportBoard() {
  const [nameList, setNameList] = useState<string[]>([]);
  const [showList, setShowList] = useState(false);

  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "Daniel",
    "Farah",
    "Elanor",
    "George",
    "Hannah",
  ];

  const lastNames = [
    "Atkinson",
    "Boyle",
    "Clarke",
    "Dresner",
    "Einstein",
    "Faraday",
    "Gryffindor",
    "Hoskinson",
  ];

  const individualName = {
    initial: {
      // opacity: 0,
      y: -100,
    },
    animate: {
      // opacity: 1,
      y: 0,
    },
    exit: {
      // opacity: 0,
      y: -100,
    },
  };

  const controls = {
    namesCount: 10,
    nameGenerationDelay: 1000,
    stagger: 0,
  };
  controls.stagger = 1 / controls.namesCount;

  const allNames = {
    initial: {
      transition: { staggerChildren: controls.stagger, duration: 1 },
    },
    animate: {
      transition: { staggerChildren: controls.stagger, duration: 1 },
    },
    exit: {
      transition: { staggerChildren: controls.stagger, duration: 1 },
    },
  };

  function generateName() {
    let index1 = Math.floor(Math.random() * firstNames.length);
    let index2 = Math.floor(Math.random() * lastNames.length);
    return `${firstNames[index1]} ${lastNames[index2]}`;
  }

  function generateNameList() {
    let list: string[] = [];
    for (let i = 0; i < controls.namesCount; i++) {
      list.push(generateName());
    }
    setNameList(list);
    list = []; // clean-up
  }

  function shuffleNames() {
    setShowList(false);
    setTimeout(() => {
      generateNameList();
      console.log("new names generated");
    }, controls.nameGenerationDelay);
  }

  useEffect(() => {
    generateNameList();
    console.log("initial names generated");
    setShowList(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 500);
  }, [nameList]);

  return (
    <>
      <button
        onClick={shuffleNames}
        disabled={!showList} // disable when list is changing
        className="ring-1 ring-black py-1 px-2 my-3 rounded-md"
      >
        Shuffle
      </button>
      <AnimatePresence>
        {showList && (
          <motion.div
            variants={allNames}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {nameList.map((name, i) => (
              <div className="overflow-hidden">
                <motion.p variants={individualName} key={i}>
                  {name}
                </motion.p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
