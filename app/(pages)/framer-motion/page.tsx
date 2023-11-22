"use client";

import React, { useEffect, useState } from "react";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";

export default function FramerMotionPage() {
  const [count, setCount] = useState(1);
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i + 1);
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
            onClick={() => setCount(1)}
            className="py-2 px-3 ring-1 ring-black rounded-md mr-3 bg-red-200"
          >
            Reset
          </button>
        </div>
        <div className="numbers w-[40px] h-[40px] relative ring-1 ring-black justify-center flex items-center">
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
  let yOffset = useTransform(mv, (latest) => {
    let height = 40; // height of each counter block
    let offset = number - latest;

    return offset * height;
  });
  return (
    <>
      <motion.span
        className="absolute"
        style={{
          y: yOffset,
        }}
      >
        {number}
      </motion.span>
    </>
  );
}
