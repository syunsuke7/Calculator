import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

export function App() {
  const [num, setNum] = useState("");
  const [keisanNum, setKeisanNum] = useState(num);
  const keisanShiki = ["+", "-", "/" ,"*"]

  const onNumberClick = (digit) => {
    setNum((prevNum) => {
      if (prevNum === "" && digit === "0"){
        return "";
      }
      if (prevNum.includes(" = ")){
        return digit === "0" ? "" : digit;
      }else{
        if (digit === "0" && keisanShiki.includes(prevNum.slice(-1))){
          return prevNum;
        }else{
          return prevNum + digit;
        }
      }
    })
    setKeisanNum((prevKeisanNum) => {
      if (prevKeisanNum === "" && digit === "0"){
        return "";
      }
      if (prevKeisanNum.includes(" = ")){
        return digit === "0" ? "" : digit;
      }else{
        if ( digit === "0" && keisanShiki.includes(prevKeisanNum.slice(-1))){
          return prevKeisanNum;
        }else{
          return prevKeisanNum + digit;
        }
      }
    })
  }

  const onClearClick = () => {
    setNum("");
    setKeisanNum("");
  }
  
  const onKeisanClick = (shiki) => {
    setNum((prevNum) => {
      if (prevNum.includes("=") || prevNum === ""){
        return "";
      }else{
        const newKeisanNum = num + shiki;
        return newKeisanNum;
      }
    })
    setKeisanNum((prevKeisanNum) => {
      if (prevKeisanNum.includes("=") || prevKeisanNum === ""){
        return "";
      }else{
        const newKeisanNum = num + shiki;
        return newKeisanNum;
      }
    })
  }

  const onTotalClick = () => {
    if(keisanNum.includes("=") && keisanShiki.includes(keisanNum.slice(-1))){
      setNum("");
      setKeisanNum("");
      return;
    }else if(keisanShiki.includes(keisanNum.slice(-1))){
      return setNum(keisanNum + " = エラー" );
    }else if(keisanNum === ""){
      return setNum("0 = 0");
    }
    const newTotalNum = eval(keisanNum);
    setNum(keisanNum + " = " + newTotalNum);
  }

  return (
    <div>
      <div className="total-area">
        <p className="total">計算結果</p>
        <p className="total-num">{num == "" ? "0" : num}</p>
      </div>
      <div className="KeisanStyle">
        <div className="suzi">
          <button className="suziSingel" onClick={() => {onNumberClick("1")}}>1</button>
          <button className="suziSingel" onClick={() => {onNumberClick("2")}}>2</button>
          <button className="suziSingel" onClick={() => {onNumberClick("3")}}>3</button>
        </div>
        <div className="suzi">
          <button className="suziSingel" onClick={() => {onNumberClick("4")}}>4</button>
          <button className="suziSingel" onClick={() => {onNumberClick("5")}}>5</button>
          <button className="suziSingel" onClick={() => {onNumberClick("6")}}>6</button>
        </div>
        <div className="suzi">
          <button className="suziSingel" onClick={() => {onNumberClick("7")}}>7</button>
          <button className="suziSingel" onClick={() => {onNumberClick("8")}}>8</button>
          <button className="suziSingel" onClick={() => {onNumberClick("9")}}>9</button>
        </div>
        <div className="suzi">
          <button className="suziSingel" onClick={() => {onNumberClick("0")}}>0</button>
        </div>
        <div className="keisan-shiki">
          <button className="suziSingel" onClick={() => onClearClick()}>C</button>
          <button className="suziSingel" onClick={() => onKeisanClick("+")}>+</button>
          <button className="suziSingel" onClick={() => onKeisanClick("-")}>-</button>
          <button className="suziSingel" onClick={() => onKeisanClick("/")}>/</button>
          <button className="suziSingel" onClick={() => onKeisanClick("*")}>*</button>
          <button className="suziSingel" onClick={() => onTotalClick()}>=</button>
        </div>
      </div>
    </div>
  );
};
