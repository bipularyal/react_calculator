
import { useState } from 'react';
import './App.css';

function App() {
const [calc,setCalc] = useState("")
const [result,setResult] = useState("")

  const digit = []
    const createDigits = () => {
      for (let index = 0; index < 9; index++) {
        digit[index] = index+1
      }
    }
    createDigits()

    const calculate = () => {
      setCalc(eval(calc).toString());
    }
    const deleteLast = () => {
      if (calc == ""){
        return
      }
      const value = calc.slice(0,-1)
      setCalc(value)
    }
    const ops = ['/','*','+','-', '.']
    const updateCalc = value => {
      if (
        ops.includes(value) && calc === "" || 
        ops.includes(value) && ops.includes(calc.slice(-1)))
      {
        return;
      }
      setCalc(calc+value)
      if (!ops.includes(value)){
        setResult(eval(calc+value).toString());
      }
    }
  return (
    <div className="App">
     <div className="fi-calc">
        <div className="fi-disp">
            {result ? <span>({result}) </span> : " "}
            {calc || " 0"}
        </div>
        <div className="fi-oprators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
          <div className="fi-digits">
            {digit.map((val) => <button onClick={ () => updateCalc(val.toString())} key = {val}> {val}</button>)}
            <button onClick={() => updateCalc("0")} key= {0}>0</button>
            <button onClick={() => updateCalc(".")} key = {11}>.</button>
            <button onClick = {calculate}>=</button>
 
          </div>
     </div>
    </div>
  );
}
export default App;
