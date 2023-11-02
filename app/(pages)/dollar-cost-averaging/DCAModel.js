"use client";

import { csv } from "d3-fetch";
import { DCAStore } from "@/app/(zustand)/store";
import { join } from "@/app/(utils)/utils";

/**
 * DataFetch
 * @param csvFilePath - string
 * @return void
 *
 * Responsible for fetching, parsing, dataset enrichment, and updating the global DCA Final Data.
 *
 * CSV must at least have:
 * - "date", date in string format "dd/mm/YYYY" or "mm/dd/YYYY"
 * - "price", no commas
 */
export default class DCAModel {
  constructor() {
    this.rawData = [];
    this.dcaData = [];

    // global states and setters
    this.csvFilePath = DCAStore((store) => store.csvPath);

    this.buyDollarValue = DCAStore((store) => store.dollarAmount);
    this.dateInput = DCAStore((store) => store.date);

    this.finalData = DCAStore((store) => store.finalData);
    this.setFinalData = DCAStore((store) => store.setFinalData);

    this.finalDataLoaded = DCAStore((store) => store.finalDataLoaded);
    this.setFinalDataLoaded = DCAStore((store) => store.setFinalDataLoaded);
  }

  run() {
    (async () => {
      await this.getData();
      this.calculateABP();
      this.calculateFinalData();
      this.setFinalDataLoaded(true);
    })();
  }

  async getData() {
    let path = this.csvFilePath;
    let output = await csv(path);

    // Tidy data

    output.forEach((d) => {
      d.price = +d.price;
      d.date = new Date(d.date);
    });

    // Filter the data by starting date

    output = output.filter((d) => {
      return d.date > this.dateInput;
    });

    this.rawData = output;
    console.log("DCAModel.js", output);
  }

  calculateABP() {
    let history = this.rawData;
    if (!history || history.length === 0) {
      return;
    }
    let buy = this.buyDollarValue;
    let totalBuy = 0;
    let totalQty = 0;
    let output = [];

    // Create empty dataset with new columns:
    // total invested, total owned, invest value, profit, abp

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
      this.dcaData = output;
    }
  }

  calculateFinalData() {
    let result = this.dcaData;
    let data = this.rawData;

    // Join DCA Dataset with existing dataset to complete Final Dataset

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
    this.setFinalData(output);
  }
}
