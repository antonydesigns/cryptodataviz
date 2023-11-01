import { create } from "zustand";

export const DCAStore = create((set) => ({
  finalData: [],
  date: new Date("11/06/2021"),
  dollarAmount: 100,
  setfinalData: (newData) => set(() => ({ finalData: newData })),
  setDate: (newDate) => set(() => ({ date: newDate })),
  setDollar: (newDollarVal) => set(() => ({ dollarAmount: newDollarVal })),
}));
