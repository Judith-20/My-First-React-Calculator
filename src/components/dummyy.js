// "homepage": "https://github.com/Judith-20/My-First-React-Calculator.git",
// import React, { useState, } from "react";
// // import "./App.css";

// function Calculator() {
//   const [input, setInput] = useState(""); // To hold the user input
//   const [memory, setMemory] = useState(null); // To hold memory functions
//   const [error, setError] = useState(""); // To handle and display errors

//   const handleInput = (value) => {
//     if (error) {
//       setError("");
//       setInput(value);
//     } else {
//       setInput(input + value);
//     }
//   };

//   const clearInput = () => {
//     setInput("");
//     setError("");
//   };

//   const handleEqual = () => {
//     try {
//       // Evaluate the expression using eval (caution, this is basic)
//       const result = eval(input);
//       setInput(result.toString());
//     } catch (error) {
//       setError("Error");
//     }
//   };

//   const handleDecimal = () => {
//     if (!input.includes(".")) {
//       setInput(input + ".");
//     }
//   };

//   const handlePercentage = () => {
//     try {
//       const result = eval(input) / 100;
//       setInput(result.toString());
//     } catch (error) {
//       setError("Error");
//     }
//   };

//   const handleMemoryAdd = () => {
//     setMemory(input);
//   };

//   const handleMemoryRecall = () => {
//     if (memory) {
//       setInput(memory);
//     }
//   };

//   const handleMemoryClear = () => {
//     setMemory(null);
//   };

//   const handleKeyboardInput = (e) => {
//     if (e.key >= "0" && e.key <= "9") handleInput(e.key);
//     if (["+", "-", "*", "/"].includes(e.key)) handleInput(e.key);
//     if (e.key === "Enter") handleEqual();
//     if (e.key === "Backspace") clearInput();
//     if (e.key === ".") handleDecimal();
//   };

//   React.useEffect(() => {
//     window.addEventListener("keydown", handleKeyboardInput);
//     return () => window.removeEventListener("keydown", handleKeyboardInput);
//   }, [input, error]);

//   return (
//     <div className="calculator">
//       <div className="display">{error || input || "0"}</div>
//       <div className="keypad">
//         <button onClick={clearInput}>C</button>
//         <button onClick={handleMemoryAdd}>M+</button>
//         <button onClick={handleMemoryRecall}>MR</button>
//         <button onClick={handleMemoryClear}>MC</button>
//         <button onClick={() => handleInput("/")}>/</button>
//         <button onClick={() => handleInput("7")}>7</button>
//         <button onClick={() => handleInput("8")}>8</button>
//         <button onClick={() => handleInput("9")}>9</button>
//         <button onClick={() => handleInput("*")}>*</button>
//         <button onClick={() => handleInput("4")}>4</button>
//         <button onClick={() => handleInput("5")}>5</button>
//         <button onClick={() => handleInput("6")}>6</button>
//         <button onClick={() => handleInput("-")}>-</button>
//         <button onClick={() => handleInput("1")}>1</button>
//         <button onClick={() => handleInput("2")}>2</button>
//         <button onClick={() => handleInput("3")}>3</button>
//         <button onClick={() => handleInput("+")}>+</button>
//         <button onClick={() => handleInput("0")} className="zero">
//           0
//         </button>
//         <button onClick={handleDecimal}>.</button>
//         <button onClick={handlePercentage}>%</button>
//         <button onClick={handleEqual}>=</button>
//       </div>
//     </div>
//   );
// }

// export default Calculator;

// import React, { useState, useEffect } from "react";

// function Calculator() {
//   const [input, setInput] = useState(""); // To hold the user input
//   const [memory, setMemory] = useState(null); // To hold memory functions
//   const [error, setError] = useState(""); // To handle and display errors

//   const handleInput = (value) => {
//     if (error) {
//       setError("");
//       setInput(value);
//     } else {
//       setInput(input + value);
//     }
//   };

//   const clearInput = () => {
//     setInput("");
//     setError("");
//   };

//   const handleEqual = () => {
//     try {
//       // Evaluate the expression using eval (caution, this is basic)
//       const result = eval(input);
//       setInput(result.toString());
//     } catch (error) {
//       setError("Error");
//     }
//   };

//   const handleDecimal = () => {
//     if (!input.includes(".")) {
//       setInput(input + ".");
//     }
//   };

//   const handlePercentage = () => {
//     try {
//       const result = eval(input) / 100;
//       setInput(result.toString());
//     } catch (error) {
//       setError("Error");
//     }
//   };

//   const handleMemoryAdd = () => {
//     setMemory(input);
//   };

//   const handleMemoryRecall = () => {
//     if (memory) {
//       setInput(memory);
//     }
//   };

//   const handleMemoryClear = () => {
//     setMemory(null);
//   };

//   useEffect(() => {
//     const handleKeyboardInput = (e) => {
//       if (e.key >= "0" && e.key <= "9") handleInput(e.key);
//       if (["+", "-", "*", "/"].includes(e.key)) handleInput(e.key);
//       if (e.key === "Enter") handleEqual();
//       if (e.key === "Backspace") clearInput();
//       if (e.key === ".") handleDecimal();
//     };

//     window.addEventListener("keydown", handleKeyboardInput);
//     return () => window.removeEventListener("keydown", handleKeyboardInput);
//   }, [input, error]);

//   return (
//     <div className="calculator">
//       <div className="display">{error || input || "0"}</div>
//       <div className="keypad">
//         <button onClick={clearInput}>C</button>
//         <button onClick={handleMemoryAdd}>M+</button>
//         <button onClick={handleMemoryRecall}>MR</button>
//         <button onClick={handleMemoryClear}>MC</button>
//         <button onClick={() => handleInput("/")}>/</button>
//         <button onClick={() => handleInput("7")}>7</button>
//         <button onClick={() => handleInput("8")}>8</button>
//         <button onClick={() => handleInput("9")}>9</button>
//         <button onClick={() => handleInput("*")}>*</button>
//         <button onClick={() => handleInput("4")}>4</button>
//         <button onClick={() => handleInput("5")}>5</button>
//         <button onClick={() => handleInput("6")}>6</button>
//         <button onClick={() => handleInput("-")}>-</button>
//         <button onClick={() => handleInput("1")}>1</button>
//         <button onClick={() => handleInput("2")}>2</button>
//         <button onClick={() => handleInput("3")}>3</button>
//         <button onClick={() => handleInput("+")}>+</button>
//         <button onClick={() => handleInput("0")} className="zero">
//           0
//         </button>
//         <button onClick={handleDecimal}>.</button>
//         <button onClick={handlePercentage}>%</button>
//         <button onClick={handleEqual}>=</button>
//       </div>
//     </div>
//   );
// }

// export default Calculator;
