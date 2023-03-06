// import './App.css';
import style from "./App.module.css";
import {User} from './User';
import { useState } from "react";

function App() {
  // let age = 0;
  const [age, setAge] = useState(0)

  const inCraseAge = () =>{
    // age = age +1;
    // console.log(age)
    setAge(age+3);
  };

  return (
    <div className={style.App}>
      {age} <button onClick={inCraseAge}>Incrase Age</button>

    </div>
  );
}

export default App;
