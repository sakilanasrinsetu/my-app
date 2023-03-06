// import './App.css';
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Job salary={953000} position="Sr.Software Enginner" company="Meta"/>
      <Job salary={753000} position="Software Enginner" company="Amazon"/>
      <Job salary={32000} position="Jr. Software Enginner" company="Google"/>
    </div>
  );
}

const Job = (props) =>{
  return (
    <p className={style.Name}><i>Position is = {props.position} <br /> Gross Salary = {props.salary}
    <br/> Company Name is = {props.company}
    </i></p>
  )
  
}

export default App;
