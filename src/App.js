import './App.css';
// import style from "./App.module.css";
import {User} from './User';
import { useState } from "react";

function App() {
  const [showText, setShowText]=useState(true);

  return (
    <div className="App">
      <button onClick={() =>{
      setShowText(!showText);
      }}
      >
      Show/Hide
      </button>
      {showText === true && <h1>Hi and hello</h1>}
    </div>
  );
}

export default App;
