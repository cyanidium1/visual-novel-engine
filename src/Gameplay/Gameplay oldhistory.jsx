import React from "react";
import { useState } from "react";
import "./Gameplay.module.css";
import Frame from "../Frame/Frame";
import plot from "../output.json";

const Gameplay = () => {
  //data
  const inventory = ["wrench", "kimikspraj", "kusam", "money"];

  const [history, updHistory] = useState(["p0"]);

  const [frame, changeFrame] = useState("p0");

  // gameplay

  const b1 = () => {
    if (plot[frame]?.f1possibleIf !== undefined) {
      if (!inventory.includes(plot[frame]?.f1possibleIf)) {
        alert("you do not have " + plot[frame]?.f1possibleIf);
        return;
      }
    }
    changeFrame(plot[frame].f1);
    updHistory((history) => [...history, plot[frame].f1]);
  };
  const b2 = () => {
    if (plot[frame]?.f2possibleIf !== undefined) {
      if (!inventory.includes(plot[frame]?.f2possibleIf)) {
        alert("you do not have " + plot[frame]?.f2possibleIf);
        return;
      }
    }
    changeFrame(plot[frame].f2);
    updHistory((history) => [...history, plot[frame].f2]);
  };
  const b3 = () => {
    if (plot[frame]?.f3possibleIf !== undefined) {
      if (!inventory.includes(plot[frame]?.f3possibleIf)) {
        alert("you do not have " + plot[frame]?.f3possibleIf);
        return;
      }
    }

    changeFrame(plot[frame].f3);
    updHistory((history) => [...history, plot[frame].f3]);
    console.log(plot[frame]?.f3possibleIf);
  };

  const turnBack = () => {
    if (history.length > 1) {
      changeFrame(history[history.length - 2]);
      history.pop();
      console.log(history);
    }
  };

  // render it

  return (
    <>
      <div className="App">
        <Frame text={plot[frame]} b1={b1} b2={b2} b3={b3} tb={turnBack} />
      </div>
    </>
  );
};

export default Gameplay;
