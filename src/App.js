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
        return <h1> User Name is = {user.name}, and Age is = {user.age} </h1>

      })}     
    </div>
  );
}

export default App;
