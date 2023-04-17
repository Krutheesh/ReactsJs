
import React, { useState } from "react";
import "./App.css"
const Calculator = () => {
  const [input ,setInput] = useState("");
  const [result, setResult] = useState("");
  return(
  <>
  
<div className="container">
      <div className="op">
      <input type="text" value={input} ></input>
      <p >{result}</p>
      </div>
      <button className="span-two" onClick={() =>{setInput(""); setResult("")} }>Ac</button>
      <button >Del</button>
      <button onClick={() => setInput(input + "+")}>+</button>
      <button onClick={() => setInput(input + "1")}>1</button>
      <button onClick={() => setInput(input + "2")}>2</button>
      <button onClick={() => setInput(input + "3")}>3</button>
      <button onClick={() => setInput(input + "*")}>*</button>
      <button onClick={() => setInput(input + "4")}>4</button>
      <button onClick={() => setInput(input + "5")}>5</button>
      <button onClick={() => setInput(input + "6")}>6</button>
      <button onClick={() => setInput(input + "/")}>/</button>
      <button onClick={() => setInput(input + "7")}>7</button>
      <button onClick={() => setInput(input + "8")}>8</button>
      <button onClick={() => setInput(input + "9")}>9</button>
      <button onClick={() => setInput(input + "-")}>-</button>
      <button onClick={() => setInput(input + ".")}>.</button>
      <button onClick={() => setInput(input + "0")}>0</button>
      <button className="span-two" onClick={() => setResult(eval(input))}> = </button>
    </div>

  </>
    
  )
}

export default Calculator;