"use client";
import React, { useEffect } from "react";
import DCAModel from "./DCAModel";
import DCAInputs from "./input-form/DCAInputs";
import { DCAStore } from "./DCAStore";
import dynamic from "next/dynamic";
import Section from "@/components/custom/Section";

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

  const intro = {
    heading: "Dollar Cost Averaging Simulator",
    body: [
      "The Dollar Cost Averaging (DCA) Simulator shows what will happen if you consistently invest the same amount of money into crypto over a long period of time. ",
      "Crypto prices are extremely volatile, and buying them at a higher than average price can negatively impact your portfolio. DCA allows you to spread your purchases over time, allowing you to buy at an average price.",
      "Play around with the simulation below. See how starting earlier or later can impact your profits.",
    ],
  };

  return (
    <>
      <Section content={intro} />

      <div className="mt-10">
        <DCAInputs />
      </div>

      <div className="border border-gray-600 rounded-md bg-clip-border py-3 my-5">
        <DynamicDCAChart />
      </div>
      <em>
        Price data retrieved from Investing.com. The data shown here is not live
        and should never be interpreted as investment advice.
      </em>
    </>
  );
}
