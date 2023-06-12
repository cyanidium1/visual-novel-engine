import React from "react";
import { useState } from "react";
import "./Gameplay.module.css";
import Frame from "../Frame/Frame";
import plotru from "../Put-your-novel-here/outputru.json";
import ploten from "../Put-your-novel-here/outputen.json";

const Gameplay = (state) => {
  // lang

  const [language, changeLanguage] = useState("english");

  const [plot, chPlot] = useState(ploten)

  const chLang = () => {
    language === "english"
      ? changeLanguage("russian")
      : changeLanguage("english");
    language === "russian" ? (chPlot(ploten)) : (chPlot(plotru));
  };

  //data

  let inventory = ["wrench", "kimikspraj", "kusam", "money"];

  const [bg, changeBg] = useState(plot.p0.bg);

  const [history, updHistory] = useState([["p0", inventory, bg]]);

  const [frame, changeFrame] = useState("p0");

  // btns and funcs

  const b1 = () => {
    if (plot[frame]?.f1possibleIf !== undefined) {
      if (!inventory.includes(plot[frame]?.f1possibleIf)) {
        alert("you do not have " + plot[frame]?.f1possibleIf);
        return;
      }
    }
    changeFrame(plot[frame].f1);
    updHistory((history) => [...history, [plot[frame].f1, inventory, bg]]);
    if (plot[plot[frame].f1].bg !== undefined) {
      changeBg(plot[plot[frame].f1].bg);
    }
  };
  const b2 = () => {
    if (plot[frame]?.f2possibleIf !== undefined) {
      if (!inventory.includes(plot[frame]?.f2possibleIf)) {
        alert("you do not have " + plot[frame]?.f2possibleIf);
        return;
      }
    }
    changeFrame(plot[frame].f2);
    updHistory((history) => [...history, [plot[frame].f2, inventory, bg]]);
    if (plot[plot[frame].f2].bg !== undefined) {
      changeBg(plot[plot[frame].f2].bg);
    }
  };
  const b3 = () => {
    if (plot[frame]?.f3possibleIf !== undefined) {
      if (!inventory.includes(plot[frame]?.f3possibleIf)) {
        alert("you do not have " + plot[frame]?.f3possibleIf);
        return;
      }
    }

    changeFrame(plot[frame].f3);
    updHistory((history) => [...history, [plot[frame].f3, inventory, bg]]);
    if (plot[plot[frame].f3].bg !== undefined) {
      changeBg(plot[plot[frame].f3].bg);
    }
  };

  const turnBack = () => {
    if (history.length > 1) {
      changeFrame(history[history.length - 2][0]);
      inventory = history[history.length - 2][1];
      changeBg(history[history.length - 1][2]);
      history.pop();
    }
  };

  // render it

  return (
    <>
      <div className="App">
        <Frame
          text={plot[frame]}
          b1={b1}
          b2={b2}
          b3={b3}
          tb={turnBack}
          bg={bg}
          chLang={chLang}
          lang={language}
        />
      </div>
    </>
  );
};

export default Gameplay;
