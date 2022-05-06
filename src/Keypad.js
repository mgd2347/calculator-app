import React from "react";
import Button from "./Button";
import "./Keypad.css";

export default function Keypad() {
  return (
    <div className="Keypad">
      <div>
        <Button symbol="⅟" />
        <Button symbol="7" />
        <Button symbol="4" />
        <Button symbol="1" />
        <Button symbol="±" />
      </div>
      <div>
        <Button symbol="√" />
        <Button symbol="8" />
        <Button symbol="5" />
        <Button symbol="2" />
        <Button symbol="0" />
      </div>
      <div>
        <Button symbol="%" />
        <Button symbol="9" />
        <Button symbol="6" />
        <Button symbol="3" />
        <Button symbol="." />
      </div>
      <div>
        <Button symbol="÷" />
        <Button symbol="x" />
        <Button symbol="-" />
        <Button symbol="+" />
        <Button symbol="=" className="equals" />
      </div>
    </div>
  );
}