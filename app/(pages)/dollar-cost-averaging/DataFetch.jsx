"use client";

import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { DCAStore } from "@/app/(zustand)/store";
import { join, stringToDate } from "@/app/(utils)/utils";

export default function DataFetch({ csvFilePath }) {
  let state = {
    csvFilePath: csvFilePath,
    rawData: [],
    dcaData: [],
    buyDollarValue: DCAStore((store) => store.dollarAmount),
    finalData: DCAStore((store) => store.finalData),
    dateInput: DCAStore((store) => store.date),
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [finalRow, setFinalRow] = useState([]);

  useEffect(() => {
    renderChart();
  }, []);

  function renderChart() {
    (async () => {
      await getData();
      setIsLoaded(true);
      calculateABP();
      calculateFinalData();
    })();
  }

  async function getData() {
    let path = state.csvFilePath;
    let output = await csv(path);

    // tidy data

    output.forEach((d) => {
      d.price = +d.price;
      d.date = stringToDate(d.date);
    });

    // filter the date

    console.log(typeof output);

    output = output.filter((d) => {
      return d.date > state.dateInput;
    });

    state.rawData = output;
  }

  function calculateABP() {
    let history = state.rawData;
    if (!history || history.length === 0) {
      return;
    }
    let buy = state.buyDollarValue;
    let totalBuy = 0;
    let totalQty = 0;
    let output = [];
    for (let i = 0; i < history.length; i++) {
      let row = history[i];
      let date = row.date;
      let qty = buy / row.price;
      totalBuy += buy;
      totalQty += qty;
      let abp = totalBuy / totalQty;
      let totalValue = totalQty * row.price;
      let profit = totalValue - totalBuy;
      output.push({
        date: date,
        profit: profit,
        investment_value: totalValue,
        total_invested: totalBuy,
        total_owned: totalQty,
        abp: abp,
        buy: buy,
        qty: qty,
      });
      state.dcaData = output;
    }
  }

  function calculateFinalData() {
    let result = state.dcaData;
    let data = state.rawData;
    let output = join(result, data, "date", "date", (data, result) => {
      return {
        date: data.date,
        price: data.price,
        abp: result.abp,
        profit: result.profit,
        investment_value: result.investment_value,
        total_invested: result.total_invested,
      };
    });
    state.presentation = output;
    let arrayLength = output.length;
    setFinalRow(output[arrayLength - 1]);
    setFinalData(output);
    setRender(true);
  }

  return <div>DataFetch</div>;
}
