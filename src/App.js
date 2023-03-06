// import './App.css';
import style from "./App.module.css";

function App() {
  const age =19

  return (
    <div className={style.App}>
      { age >=18 ? <i>Over Age</i> : <i>Under Age</i>}
    </div>
  );
}

export default App;
