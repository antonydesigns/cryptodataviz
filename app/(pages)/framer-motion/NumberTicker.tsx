// "use client";

// import React, { useEffect, useState } from "react";
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function NumberTicker() {
  // const [count, setCount] = useState(0);
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }

  const animatedValue = useSpring(0);

  /*   useEffect(() => {
    animatedValue.set(count);
  }, [animatedValue, count]); */

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="controls">
          <button
            onClick={() => {} /* setCount(count + 1) */}
            className="py-2 px-3 ring-1 ring-black rounded-md mr-3 bg-green-200"
          >
            Change count: {/* count */}
          </button>
          <button
            onClick={() => {} /* setCount(0) */}
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
      <motion.div
        className="bg-green-300 w-[100px] h-[100px] mt-[100px] rounded-[50%]"
        initial={{ rotate: 45 }}
        whileTap={{ rotate: 360 }}
        transition={{ duration: 1, type: "inertia", velocity: 10000 }}
      >
        <div className="w-[10px] h-[10px] bg-black rounded-[50%]"></div>
      </motion.div>
      <div className="mt-[100px]"></div>
      <List />
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

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";

function List() {
  const [items, setItems] = useState([0, 1, 2, 3]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          <p className="bg-sky-200 w-[100px] py-1 my-2 text-center">{item}</p>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
