import logoDollar from "./images/icon-dollar.svg";
import logoPerson from "./images/icon-person.svg";
import logo from "./images/logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [people, setPeople] = useState(1);
  const [customTip, setCustomTip] = useState("");

  const calculateTip = () => {
    const billAmount = parseFloat(bill);
    const tipPercent = customTip ? parseFloat(customTip) : tipPercentage;
    const tipAmount = billAmount * (tipPercent / 100);
    const totalAmount = billAmount + tipAmount;
    const tipPerPerson = tipAmount / people;
    const totalPerPerson = totalAmount / people;
    return {
      tipPerPerson: tipPerPerson.toFixed(2),
      totalPerPerson: totalPerPerson.toFixed(2),
    };
  };

  const handleReset = () => {
    setBill("");
    setTipPercentage("");
    setPeople(1);
    setCustomTip("");
  };

  const { tipPerPerson, totalPerPerson } = calculateTip();

  return (
    <>
      <img src={logo} alt="LogoDollar" className="main-logo" />
      <div className="container">
        <div className="bill-section">
          <label>
            Bill
            <div class="input-container">
              <img src={logoDollar} alt="LogoDollar" />
              <input 
              type="number" 
              value = {bill}
              onChange={(e) => setBill(e.target.value)}
              className="dollar-input" 
              placeholder="0" />
            </div>
          </label>
          <label>
            Select Tip%
            <div className="tip-buttons">
              {[5,10,15,20,50].map((tip) => (
                <button 
                key={tip}
                className={tipPercentage === tip && !customTip ? 'active' : ''}
                onClick={() => {
                  setTipPercentage(tip);
                  setCustomTip('');
                }}
              >
                {tip}%
                </button>
              ))}
              
              <input
              type="number"
              placeholder="Custom"
              className="button-custom"
              value={customTip}
              onChange={(e) => setCustomTip(e.target.value)}
              
            />
            </div>
          </label>

          <label>
            Number of people
            <div class="input-container">
              <img src={logoPerson} alt="LogoPerson" />
              <input 
              type="number" 
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              min="1" 
              placeholder="0" />
            </div>
          </label>
        </div>

        <div className="result-section">
          <div>
            <p>
              Tip Amount <span>/ person</span>{" "}
            </p>
            <h2>{tipPerPerson}</h2>
          </div>
          <div>
            <p>
              Total <span>/ person</span>{" "}
            </p>
            <h2>{totalPerPerson}</h2>
          </div>
          <button
          className="reset-button"
          onClick={handleReset}
          >
            RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;
