import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[cnf,setcnf]=useState();
  const navigate = useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(name&&email&&password&&cnf){
      if(password===cnf){
        alert("Registered Successfully");
        navigate("/login");
      }else{
        alert("Please enter the same password for confirming")
      }
    }
    else{
      alert("All Fields are Mandatory")
    }
  }
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Welcome to Onboard!</h1>
        <p className="subtitle">Let's help to meet up your tasks.</p>
        <form className="form" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Enter your full name"
            className="input"
            onChange={(e)=>setName(e.target.value)}
          />
          <p className="data">{name?"":"*Name is Required"}</p>
          <input
            type="email"
            placeholder="Enter your Email"
            className="input"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <p className="data">{email?"":"*Email is Required"}</p>
          <input
            type="password"
            placeholder="Enter Password"
            className="input"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <p className="data">{password?"":"*Password is Required"}</p>
          <input
            type="password"
            placeholder="Confirm password"
            className="input"
            onChange={(e)=>setcnf(e.target.value)}
          />
          <p className="data">{cnf?"":"*Confirm your Password"}</p>
          <button type="submit" className="button">
            Register
          </button>
        </form>
        <p className="sign-in-text">
          Already have an account? <NavLink to="/login" className="sign-in-link">Sign In</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Registration;
