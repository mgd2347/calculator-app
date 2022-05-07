import React, { useState } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
import Button from "./Button";
import "./Calculator.css";

export default function Calculator() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  const btnValues = [
    ["C", "±", "x", "÷"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3, "."],
    [0, "="]
  ];

  function clear() {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      result: 0
    });
    console.log(calc)
  }

  function handleNum(event) {
    event.preventDefault();
    const value = event.target.innerHTML;

    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
      result: !calc.sign ? 0 : calc.result
    });
    console.log(calc)
  }

  function invert() {
    setCalc({
      ...calc,
      num:
        calc.num ? calc.num * -1 : 0,
      result:
        calc.num ? calc.num * -1 : 0,
      sign: ""
    })
    console.log(calc)
  }

  function handleOp(event) {
    event.preventDefault();
    const value = event.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      result:
        !calc.result && calc.num ? calc.num : calc.result,
      num: 0
    });
    console.log(calc)
  }

  function handleEquals() {
    if (calc.sign && calc.num) {
      function calculate(a, b, sign) {
        let op = 0;

        sign === "+"
          ? op = a + b
          : sign === "-"
            ? op = a - b
            : sign === "x"
              ? op = a * b
              : op = a / b;
        console.log(op);
        return op;
      }
    
      setCalc({
        ...calc,
        result:
          calc.num === "0" && calc.sign === "÷"
            ? "Can't do division with 0"
            : calculate(Number(calc.result), Number(calc.num), calc.sign),
        sign: "",
        num: 0
      });
    }
    console.log(calc)
  }

  function handleFloat(event) {
    event.preventDefault();
    const value = event.target.innerHTML;

    setCalc({
      ...calc,
      num:
        !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
    console.log(calc)
  }

  return (
    <div className="Calculator">
      <Screen value={calc.num ? calc.num : calc.result} />
      <Keypad>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                  btn === "C"
                    ? clear
                    : btn === "±"
                      ? invert
                      : btn === "="
                        ? handleEquals
                        : btn === "+" || btn === "-" || btn === "x" || btn === "÷"
                          ? handleOp
                          : btn === "."
                            ? handleFloat
                            : handleNum
                }
              />
            );
          })
        }
      </Keypad>
    </div>
  );
}