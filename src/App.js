// import './App.css';
import style from "./App.module.css";

function App() {
  const users = [
    {name: 'a', age:10},
    {name: 'b', age:13},
    {name: 'c', age:40},
    {name: 'd', age:17},
    {name: 'e', age:30},
    {name: 'f', age:133}

]

  
  return (
    <div className={style.App}>
      {users.map((user, key) =>{
        return <User  name = {user.name} age={user.age}/>

      })}     
    </div>
  );
}
const User = (props) =>{
  return(
    <div>
      {props.name} {props.age}
    </div>
  )
}

export default App;
