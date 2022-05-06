import React from "react";
import Screen from "./Screen";
import Keypad from "./Keypad.js";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="Calculator">
      <Screen />
      <Keypad />
    </div>
  );
}