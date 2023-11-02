import { create } from "zustand";

export const DCAStore = create((set) => ({
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
    { ticker: "BTC", path: "/BTC.csv" },
    { ticker: "ETH", path: "/ETH.csv" },
  ],

  csvPath: "/BTC.csv",
  setCsvPath: (newPath) => set(() => ({ csvPath: newPath })),
}));
