import './App.css';

function App() {
  const name = "Sakila Nasrin Setu"
  const email = "setu@gmail.com"
  const phone = "88018XXXXXXXX"
  const user =(
    <div>
      {name}
      {email}
      {phone}
    </div>
  )
  return (
    <div className="App">
      {/* <h1>Full Name is =</h1> {name}
      <h2>Email Address is = {email}</h2>
      <h3>Phone Number is = {phone}</h3> */}
      {user}
      <GetName name="Sakila"/>
      <GetNameComponent />
    </div>
  );
}

const GetName = (props) =>{
  return (
    <div>
      <i>{props.name}</i>
      <i> Setu</i>
      
    </div>
  )
}

const GetNameComponent = () =>{
  return <h1>setu@gmail.com</h1>
}


export default App;
