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

/* export const EditorStore = create((set) => ({
  editMode: false,
  setEditMode: (newStatus) => set(() => ({ editMode: newStatus })),
  editText: false,
  setEditText: (newStatus) => set(() => ({ editText: newStatus })),
}));

export const ContentModel = create((set) => ({
  model: [
    { id: 1, content: "<h1>Hello World!</h1>" },
    {
      id: 2,
      content:
        "<p className='text-red-600'><strong>This</strong> is my first post.</p>",
    },
    { id: 3, content: "" },
    { id: 4, content: "<p>Mamamie</p>" },
  ],
  setModel: (updatedState) => set(() => ({ model: updatedState })),
}));
 */
