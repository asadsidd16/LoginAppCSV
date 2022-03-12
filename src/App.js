import React from "react";
import {useState} from "react";
import LoginForm from "./components/LoginForm";

function App() {

  const adminUser = {
    name: "admin",
    username: "admin",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", username: ""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if(details.username === adminUser?.username && details.password === adminUser?.password){
      console.log("logged in")
      setUser({
        name: details.name,
        username: details.username
      });
    }else{
      console.log("details do not match!")
      setError("details do not match!")
    }
  }

  const Logout = () => {
    setUser({name: "", username: ""});
  }

  return (
    <div className="App">
      {(user.username !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span> {adminUser.name}</span></h2>  
          <button onClick={Logout}>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error}/>
      )
      }
    </div>
  );
}

export default App;
