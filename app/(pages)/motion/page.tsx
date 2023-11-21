"use client";

import { motion, useAnimate, usePresence } from "framer-motion";
import React, { useEffect } from "react";
import BoomTown from "./boomtown";
import BoomTown2 from "./boomtown2";

export default function MotionPage() {
  return (
    <>
      <div className="flex justify-center items-center">
        <BoomTown2 />
      </div>
    </>
  );
}
