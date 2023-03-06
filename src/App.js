// import './App.css';
import style from "./App.module.css";

function App() {
  const age =19
  const isGreen = true;

  return (
    <div className={style.App}>
      { age >=18 ? <i>Over Age</i> : <i>Under Age</i>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This Has Color</h1>
    </div>
  );
}

export default App;
