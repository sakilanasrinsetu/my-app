// import './App.css';
import style from "./App.module.css";
import {User} from './User'

function App() {
  const users = [
    {name: 'a', age:10, isChild : true},
    {name: 'b', age:13, isChild : true},
    {name: 'c', age:40, isChild : false},
    {name: 'd', age:17, isChild : true},
    {name: 'e', age:30, isChild : false},
    {name: 'f', age:133, isChild : false}

]
  
  return (
    <div className={style.App}>
{/* 
      {users.map((user, key) =>{
        // return <User  name = {user.name} age={user.age}/>
        if (user.isChild) return <i>{user.name} is Child and age is {user.age} <br /> </i>
        else return <i>...................... <br/>{user.name} is not Child and age is {user.age} <br /> </i>

      })} 
           */}

           {users.map(
            (user, key) => !user.isChild && <i>{user.name}<br /></i>
           )}
    </div>
  );
}

export default App;
