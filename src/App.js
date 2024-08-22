import React, { useState, useEffect, useCallback } from "react";
import Calculator from "./components/calculator";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";

const btnValues = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  // const toLocaleString = (num) =>
  //   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  // const removeSpaces = (num) => num.toString().replace(/\s/g, "");
  const toLocaleString = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const removeSpaces = (num) => num.toString().replace(/,/g, "");

  // numClickHandler function function gets triggered only if any of the number buttons (0–9) are pressed. Then it gets the value of the Button and adds that to the current num value. It will also make sure that: - no whole numbers start with zero. - there are no multiple zeros before the comma. - the format will be “0.” if “.” is pressed first. -numbers are entered up to 16 integers long

  // Wrap all handlers in useCallback to avoid re-creation on each render
  // const numClickHandler = useCallback(
  //   (value) => {
  //     if (removeSpaces(calc.num).length < 16) {
  //       setCalc({
  //         ...calc,
  //         num:
  //           calc.num === 0 && value === "0"
  //             ? "0"
  //             : removeSpaces(calc.num) % 1 === 0
  //             ? toLocaleString(Number(removeSpaces(calc.num + value)))
  //             : toLocaleString(calc.num + value),
  //         res: !calc.sign ? 0 : calc.res,
  //       });
  //     }
  //   },
  //   [calc]
  // );

  // const numClickHandler = useCallback(
  //   (value) => {
  //     // If value is 0 and current num is 0, do nothing
  //     if (value === "0" && calc.num === "0") return;

  //     // Handle the case where num starts with a zero and we want to add a non-zero number
  //     if (calc.num === "0" && value !== ".") {
  //       setCalc({
  //         ...calc,
  //         num: value,
  //       });
  //     } else {
  //       setCalc({
  //         ...calc,
  //         num: removeSpaces(calc.num + value),
  //       });
  //     }
  //   },
  //   [calc]
  // );

  const numClickHandler = useCallback(
    (value) => {
      if (removeSpaces(calc.num).length < 16) {
        setCalc({
          ...calc,
          num:
            calc.num === 0 && value === "0"
              ? "0"
              : removeSpaces(calc.num) % 1 === 0
              ? toLocaleString(Number(removeSpaces(calc.num + value)))
              : toLocaleString(calc.num + value),
          res: !calc.sign ? 0 : calc.res,
        });
      }
    },
    [calc]
  );

  //decimalClickHandler  function gets fired only if the decimal point (.) is pressed. It adds the decimal point to the current num value, making it a decimal number.

  const decimalClickHandler = useCallback(() => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + "." : calc.num,
    });
  }, [calc]);

  //The signClickHandler function gets fired when the user press either +, –, * or /. The particular value is then set as a current sign value in the calc object.

  const signClickHandler = useCallback(
    (value) => {
      setCalc({
        ...calc,
        sign: value,
        res: calc.num && !calc.res ? calc.num : calc.res, // Use num as res if no previous res
        num: 0, // Reset num for the next input
      });
    },
    [calc]
  );

  //The equalsClickHandler function calculates the result when the equals button (=) is pressed. The calculation is based on the current num and res value, as well as the sign selected (see the math function). The returned value is then set as the new res for the further calculations.

  const equalsClickHandler = useCallback(() => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "*"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide by 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  }, [calc]);

  // The invertClickHandler function first checks if there’s any entered value (num) or calculated value (res) and then inverts them by multiplying with -1:

  const invertClickHandler = useCallback(() => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  }, [calc]);

  //The percentClickHandler function checks if there’s any entered value (num) or calculated value (res) and then calculates the percentage using the built-in Math.pow function, which returns the base to the exponent power

  const percentClickHandler = useCallback(() => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  }, [calc]);

  //The resetClickHandler function defaults all the initial values of calc, returning the calc state as it was when the Calculator app was first rendered:
  const resetClickHandler = useCallback(() => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  }, []);

  // Handle keyboard input
  const handleKeyboardInput = useCallback(
    (e) => {
      if (e.key >= "0" && e.key <= "9") numClickHandler(e.key);
      if (["+", "-", "*", "/"].includes(e.key)) signClickHandler(e.key);
      if (e.key === "Enter" || e.key === "=") equalsClickHandler();
      if (e.key === "Backspace") invertClickHandler();
      if (e.key === ".") decimalClickHandler();
      if (e.key === "Escape") resetClickHandler();
      if (e.key === "%") percentClickHandler();
    },
    [
      decimalClickHandler,
      equalsClickHandler,
      invertClickHandler,
      numClickHandler,
      percentClickHandler,
      resetClickHandler,
      signClickHandler,
    ]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardInput);
    return () => window.removeEventListener("keydown", handleKeyboardInput);
  }, [handleKeyboardInput]);

  return (
    <div className="App">
      <Calculator>
        <Wrapper>
          <Screen value={calc.num ? calc.num : calc.res} />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button
                key={i}
                // className={btn === "=" ? "equals" : ""}
                className={
                  btn === 0
                    ? "zero"
                    : ["=", "-", "+", "/", "*"].includes(btn)
                    ? "equals"
                    : ["AC", "+/-", "%"].includes(btn)
                    ? "special"
                    : "number"
                }

                value={btn}
                onClick={
                  btn === "AC"
                    ? resetClickHandler
                    : btn === "+/-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "*" || btn === "-" || btn === "+"
                    ? () => signClickHandler(btn)
                    : btn === "."
                    ? decimalClickHandler
                    : () => numClickHandler(btn)
                }
              />
            ))}
          </ButtonBox>
        </Wrapper>
      </Calculator>
    </div>
  );
}

// ? signClickHandler
// : btn === "."
// ? decimalClickHandler
// : numClickHandler

export default App;
