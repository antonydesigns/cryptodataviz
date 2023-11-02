"use client";
import { DCAStore } from "@/app/(zustand)/store";
import React, { useState, useEffect } from "react";
// import DCAChart from "./DCAChart";
import dynamic from "next/dynamic";

const DynamicDCAChart = dynamic(() => import("./DCAChart"), {
  ssr: false,
});

export default function DCA() {
  const date = DCAStore((state) => state.date);
  useEffect(() => {
    console.log(date);
  }, []);

  return (
    <>
      <DynamicDCAChart />
    </>
  );
}
