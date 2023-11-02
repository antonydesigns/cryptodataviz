"use client";
import React, { useState, useEffect } from "react";
import DCAModel from "./DCAModel";
import DCAChart from "./DCAChart";
import DCAInputs from "./input-form/DCAInputs";
import { DCAStore } from "@/app/(zustand)/store";

export default function DCA() {
  const singlePath = DCAStore((store) => store.csvPath);
  const dollarAmount = DCAStore((store) => store.dollarAmount);
  const date = DCAStore((state) => state.date);
  const model = new DCAModel();

  // Run the model after page loads
  useEffect(() => {
    model.run();
  }, []);

  // Run the model if asset selected changes
  // Dependent on store.csvPath because
  // useEffect() has already run with store.assetSelected
  // in AssetSelector.jsx
  useEffect(() => {
    model.run();
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

      <DCAChart />
    </>
  );
}
