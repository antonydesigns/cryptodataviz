import { create } from "zustand";
import Scene1 from "./scene1";
import Scene2 from "./scene2";
import Scene3 from "./scene4";
import Scene4 from "./scene3";
import Scene5 from "./scene5";

export const SceneStore = create((set) => ({
  sceneNumber: 0,
  setSceneNumber: (update) => set(() => ({ sceneNumber: update })),

  isComplete: 0,
  setIsComplete: (update) => set(() => ({ isComplete: update })),

  progressCounter: 0,
  setProgressCounter: (update) => set(() => ({ progressCounter: update })),

  scenes: [
    { id: 0, title: "Intro", content: <Scene1 /> },
    { id: 1, title: "Something", content: <Scene2 /> },
    { id: 2, title: "Something", content: <Scene3 /> },
    { id: 3, title: "Something", content: <Scene4 /> },
    { id: 4, title: "Something", content: <Scene5 /> },
  ],
}));
