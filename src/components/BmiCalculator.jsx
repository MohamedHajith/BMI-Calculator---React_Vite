import React, { useState }  from 'react'

import './Bmicalculator.css'

export const BmiCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmivalue, setBmivalue] = useState("");
  
    const calbmi = () => {
      let heightInmeter = height / 100;
      let bmi = weight / (heightInmeter * heightInmeter);
      setBmivalue("BMI value is: " + bmi.toFixed(2));
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
          calbmi();
      }
  };
  
    return (
      <div className="container">
        <h1>BMI Calculator</h1>
  
        <div className="input-container">
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="button-container">
          <button onClick={calbmi}>Calculate</button>
        </div>
  
        <div className="result" >{bmivalue}</div>
      </div>
    );
}

