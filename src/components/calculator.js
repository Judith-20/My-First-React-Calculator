import React from "react";
import "./calculator.css";
import { FcCalculator } from "react-icons/fc";

const Calculator = ({ children }) => {
  return (
    <div className="container">
      <div className="content">
        <FcCalculator size={28} />
        <h5 className="header">Calc App</h5>
      </div>
      {children}
    </div>
  );
};

export default Calculator;
