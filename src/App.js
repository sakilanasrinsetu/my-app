import './App.css';
// import style from "./App.module.css";
import {User} from './User';
import { useState } from "react";

function App() {
  const [textColor, setTextColor]=useState("Green");

  return (
    <div className="App">
      <button onClick={() =>{
      setTextColor(textColor === "green" ? "red": "green");
      }}
      >
      Show/Hide
      </button>
      <h1 style={{color: textColor}}>Hi and hello</h1>
    </div>
  );
}

export default App;
