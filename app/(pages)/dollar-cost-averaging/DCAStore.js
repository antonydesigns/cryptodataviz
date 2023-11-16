import { create } from "zustand";

export const DCAStore = create((set) => ({
  dataFetched: false,
  setDataFetched: (update) => set(() => ({ dataFetched: update })),

  rawData: [],
  setRawData: (update) => set(() => ({ rawData: update })),

  finalData: [],
  setFinalData: (newData) => set(() => ({ finalData: newData })),

  finalDataLoaded: false,
  setFinalDataLoaded: (newStatus) =>
    set(() => ({ finalDataLoaded: newStatus })),

  date: new Date("10/27/2013"),
  setDate: (newDate) => set(() => ({ date: newDate })),

  dollarAmount: 100,
  setDollar: (newDollarVal) => set(() => ({ dollarAmount: newDollarVal })),

  formSubmitted: false,
  setFormSubmitStatus: (newStatus) => set(() => ({ formSubmitted: newStatus })),

  assetSelected: "BTC",
  setAssetSelected: (newAsset) => set(() => ({ assetSelected: newAsset })),

  csvPaths: [
    {
      name: "Bitcoin (BTC)",
      ticker: "BTC",
      path: "weekly/BTC.csv",
      period: "weekly",
    },
    {
      name: "Ethereum (ETH)",
      ticker: "ETH",
      path: "weekly/ETH.csv",
      period: "weekly",
    },
  ],

  csvPath: "weekly/BTC.csv",
  setCsvPath: (newPath) => set(() => ({ csvPath: newPath })),
}));
