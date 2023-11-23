"use client";

import React, { useEffect, useState } from "react";
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

export default function FramerMotionPage() {
  const [nameList, setNameList] = useState<string[]>([]);

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

  function generateName() {
    let index1 = Math.floor(Math.random() * firstNames.length);
    let index2 = Math.floor(Math.random() * lastNames.length);
    return `${firstNames[index1]} ${lastNames[index2]}`;
  }

  let list: string[] = [];
  function generateNameList() {
    for (let i = 0; i < 10; i++) {
      nameList.push(generateName());
    }
    setNameList(list);
  }

  useEffect(() => {
    generateNameList();
    console.log(nameList);
  }, []);

  return <></>;
}
