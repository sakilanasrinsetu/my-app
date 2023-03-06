// import './App.css';
import style from "./App.module.css";

function App() {
  const names = ['a', 'b', 'c', 'd', 'e', 'd']

  
  return (
    <div className={style.App}>
      {names.map((value, key) =>{
        return <h1> {value} </h1>

      })}     
    </div>
  );
}

export default App;
