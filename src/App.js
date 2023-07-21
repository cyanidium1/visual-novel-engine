import Gameplay from "./Gameplay/Gameplay";
import React from "react";
import Menu from "./Menu/Menu";
import { Route, Routes } from "react-router-dom";
import Achievments from "./Achievments/Achievments";
import Credits from "./Credits/Credits";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/achievments" element={<Achievments />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/gameplay" element={<Gameplay />}></Route>
    </Routes>
  );
}

export default App;
