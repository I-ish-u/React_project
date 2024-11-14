import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

function Login() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate();

    const handlesumit=(e)=>{
        e.preventDefault();
        if(email&&password){
            navigate("/dashboard")
        }
        else{
            alert("Email and Password are mandatory")
        }
    }
  return (
    <div className="container">
        <div className="login-container">
            <h1 className="login-heading">Welcome back</h1>
            <img
                src="data:image/png;base64,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" // Replace with your actual image URL
                alt="welcome illustration"
                className="login-image"
            />
            <form onSubmit={handlesumit}>
                <input
                    type="email"
                    placeholder="Enter your Email"
                    className="login-input"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="login-input"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="login-button">Login</button>
            </form>
            <p className="signup-text">
                Don't have an account? <NavLink to="/registration" className="signup-link">Sign Up</NavLink>
            </p>
        </div>
    </div>
  );
}

export default Login;
