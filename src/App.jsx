
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
      setResult("");
    } else {
      setInput((prev) => prev + value);
      setResult("");
    }
  };

  const calculate = () => {
    try {
      if (!input) return;

      const answer = eval(input);

      if (!Number.isFinite(answer)) {
        setResult("Error");
      } else {
        setResult(answer);
      }
    } catch {
      setResult("Error");
    }
  };

  const buttons = [
    "AC", "DEL", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="calculator">

      <div className="calculator-header">
        <span className="brand">CALC</span>
        <span className="mini-text">SMART CALCULATOR</span>
      </div>

      <div className="display">
        <div className="expression">
          {input || "0"}
        </div>

        <div className={`answer ${result !== "" ? "show" : ""}`}>
          {result !== "" ? result : "Ready to calculate"}
        </div>
      </div>

      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleClick(button)}
            className={`
              ${button === "=" ? "equals" : ""}
              ${["+", "-", "*", "/", "%"].includes(button)
                ? "operator" : ""}
              ${["AC", "DEL"].includes(button)
                ? "special" : ""}
              ${button === "0" ? "zero" : ""}
            `}
          >
            {button === "*" ? "×" : button === "/" ? "÷" : button}
          </button>
        ))}
      </div>

      <div className="footer">
        Developed by SARANYA AV (212224040297)
      </div>

    </div>
  );
}

export default App;
