import React from "react";
import {useState} from "react";
import LoginForm from "./components/LoginForm";
import hero_banner from './assets/hero_banner.jpg'; 


function App() {
  const [user, setUser] = useState({name: "", username: ""});
  const [error, setError] = useState("");

  //Logic for looping through row object and checking if its equal to users input 
  const Login = (details, rows) => {
    for(let i=0; i<rows?.length;++i){
      if(details?.username === rows[i]?.Username && details?.password === rows[i]?.Password){
        setUser({
              name: rows[i].Name,
              username: rows[i].Username
        });
      }
    }
    //Form validation for invalid inputs
    if(user==={name:" ", username:" "}){
      setError("Invalid Credentials")
    }else{
      setError("Invalid Credentials")
    }

  }
  //Name and username are set to empty strings
  const Logout = () => {
    setUser({name: "", username: ""});
    setError("");
  }

  return (
    <div className="App">
      {(user.username !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span> {user.name}</span></h2>  
          <img src={hero_banner} className="img" alt="hero banner"/>
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
