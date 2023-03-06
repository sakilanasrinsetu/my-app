import './App.css';
// import style from "./App.module.css";
import {User} from './User';
import { useState } from "react";

function App() {
  const [inputValue, setInputValue]=useState("");

  const handleInputChange = (event) =>{
    // For Direct print
    setInputValue(event.target.value)
  }
  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      <p>{inputValue}</p>

    </div>
  );
}

export default App;
