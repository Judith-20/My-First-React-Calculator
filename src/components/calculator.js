import React from "react";
import "./calculator.css";
import { FcCalculator } from "react-icons/fc";
import { ReactFitty } from "react-fitty";

const Calculator = ({ children }) => {
  return (
    <ReactFitty>
      <div className="container">
        <div className="content">
          <FcCalculator size={28} />
          <h5 className="header">Calc App</h5>
        </div>
        {children}
      </div>
    </ReactFitty>
  );
};

export default Calculator;
