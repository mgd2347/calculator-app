import React from "react";
import { Textfit } from "react-textfit";
import "./Screen.css"

export default function Screen(props) {
  return (
    <div className="Screen">
      <Textfit className="screen" mode="single" max={60}>
        {props.value}
      </Textfit>
    </div>
  );
}