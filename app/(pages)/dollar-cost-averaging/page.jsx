"use client";
import React, { useEffect } from "react";
import DCAModel from "./DCAModel";
import DCAInputs from "./input-form/DCAInputs";
import { DCAStore } from "./DCAStore";
import dynamic from "next/dynamic";

const DynamicDCAChart = dynamic(() => import("./DCAChart"), {
  ssr: false,
});

export default function DCA() {
  const singlePath = DCAStore((store) => store.csvPath);
  const rawData = DCAStore((store) => store.rawData);
  const dollarAmount = DCAStore((store) => store.dollarAmount);
  const date = DCAStore((state) => state.date);
  const model = new DCAModel();

  // Save raw data after page loads
  useEffect(() => {
    model.init();
  }, []);

  useEffect(() => {
    model.run();
  }, [rawData]);

  // Run the model if asset selected changes
  // Dependent on store.csvPath because
  // useEffect() has already run with store.assetSelected
  // in AssetSelector.jsx
  useEffect(() => {
    model.init();
  }, [singlePath]);

  // Re-run the model if the date changes
  useEffect(() => {
    model.run();
  }, [date]);

  // Re-run the model if dollar amount is changed
  useEffect(() => {
    model.run();
  }, [dollarAmount]);

  return (
    <>
      <DCAInputs />

      <DynamicDCAChart />
    </>
  );
}
