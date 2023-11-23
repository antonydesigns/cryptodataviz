"use client";

import React, { useEffect, useState } from "react";
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function NumberTicker() {
  const [count, setCount] = useState(0);
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }

  const animatedValue = useSpring(count);

  useEffect(() => {
    animatedValue.set(count);
  }, [animatedValue, count]);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="controls">
          <button
            onClick={() => setCount(count + 1)}
            className="py-2 px-3 ring-1 ring-black rounded-md mr-3 bg-green-200"
          >
            Change count: {count}
          </button>
          <button
            onClick={() => setCount(0)}
            className="py-2 px-3 ring-1 ring-black rounded-md mr-3 bg-red-200"
          >
            Reset
          </button>
        </div>
        <div className="numbers w-[40px] h-[40px] relative ring-1 ring-black justify-center flex items-center overflow-hidden">
          {array &&
            array?.map((number, idx) => (
              <Number number={number} mv={animatedValue} key={idx} />
            ))}
        </div>
      </div>
    </>
  );
}

function Number({ number, mv }: { number: number; mv: MotionValue }) {
  let position = useTransform(mv, (latest) => {
    let height = 40; // height of each counter block
    let placeValue = latest % 10;

    let offset = (10 + number - placeValue) % 10;

    let position = offset * height;

    if (offset > 5) {
      position = position - 10 * height;
    }

    return position;
  });
  return (
    <>
      <motion.span
        className="absolute"
        style={{
          y: position,
        }}
      >
        {number}
      </motion.span>
    </>
  );
}
