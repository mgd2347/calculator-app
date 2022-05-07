import React from "react";
import "./Screen.css"

export default function Screen(props) {
  return (
    <div className="Screen">
      <div>{props.value}</div>
    </div>
  );
}