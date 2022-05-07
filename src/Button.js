import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div className="Button">
      <button className={props.className} onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}