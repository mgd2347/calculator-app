import React from "react";
import "./Keypad.css";

export default function Keypad({ children }) {
  return (
    <div className="Keypad">
      {children}
    </div>
  );
}