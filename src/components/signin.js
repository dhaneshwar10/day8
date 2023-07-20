import React from "react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";

function SignUp()
{
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {


    if(username && isValidPassword(password))
    {
        navigate('/')
    }

    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

   
    let isValid = true;

    if (username.trim() === "") {
      
      setUsernameError("Username is required");
      isValid = false;
    }

    if (password.trim() === "") {
   
      setPasswordError("Password is required");
      isValid = false;
    }
    else if (!isValidPassword(password)) {
      
      setPasswordError("Invalid  format");
      isValid = false;
    }

   
    if (isValid) {
     
      console.log("Form submitted");
    }
  };
  const isValidPassword = (password) => {
  
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*_=+-]).{8,}$/;
    return passwordRegex.test(password);
  };
    return(

        <div className="login-page">
  <div className="form">
   
    <form className="login-form">
      <input type="text" placeholder="username" onChange={handleUsernameChange} />
      <input type="password" placeholder="password" onChange={handlePasswordChange}/>
      <input type="email" placeholder="Email" required/>
      <input type="number" placeholder="Number" required />
      <input type="text" placeholder="Gender" required/>
      <input type="number" placeholder="Age" required/>
      <button onClick={handleSubmit}>Register</button>
      <p className="message">
       Already have an account?<Link to='/'>login</Link>
      </p>
    </form>
  </div>
</div>
    );
}

export default SignUp;