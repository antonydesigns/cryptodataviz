import { create } from "zustand";

export const ContentBoxStore = create((set) => ({
  updateSignal: false,
  setUpdateSignal: (updatedState) =>
    set(() => ({ updateSignal: updatedState })),
  rawData: [],
  setRawData: (updatedState) => set(() => ({ rawData: updatedState })),
  content: [],
  setContent: (updatedState) => set(() => ({ content: updatedState })),
  dataAvailable: false,
  setDataAvailable: (updatedState) =>
    set(() => ({ dataAvailable: updatedState })),
}));
