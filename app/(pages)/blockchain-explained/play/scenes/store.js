import { create } from "zustand";
import Scene1 from "./scene1";
import Scene2 from "./scene2";
import Scene3 from "./scene3";
import Scene4 from "./scene4";
import Scene5 from "./scene5";
import Scene6 from "./scene6";
import Scene7 from "./scene7";
import Scene8 from "./scene8";
import Scene9 from "./scene9";
import Scene10 from "./scene10";
import Scene11 from "./scene11";
import Scene12 from "./scene12";
import Scene13 from "./scene13";
import Scene14 from "./scene14";
import Scene15 from "./scene15";
import Scene16 from "./scene16";
import Scene17 from "./scene17";
import Scene18 from "./scene18";
import Scene19 from "./scene19";
import Scene20 from "./scene20";

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
    { id: 4, title: "Something", content: <Scene6 /> },
    { id: 4, title: "Something", content: <Scene7 /> },
    { id: 4, title: "Something", content: <Scene8 /> },
    { id: 4, title: "Something", content: <Scene9 /> },
    { id: 4, title: "Something", content: <Scene10 /> },
    { id: 4, title: "Something", content: <Scene11 /> },
    { id: 4, title: "Something", content: <Scene12 /> },
    { id: 4, title: "Something", content: <Scene13 /> },
    { id: 4, title: "Something", content: <Scene14 /> },
    { id: 4, title: "Something", content: <Scene15 /> },
    { id: 4, title: "Something", content: <Scene16 /> },
    { id: 4, title: "Something", content: <Scene17 /> },
    { id: 4, title: "Something", content: <Scene18 /> },
    { id: 4, title: "Something", content: <Scene19 /> },
    { id: 4, title: "Something", content: <Scene20 /> },
  ],
}));
