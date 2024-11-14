import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import "./App.css"
import Home from './Components/Home'
import Registration from './Components/Registration'
import Login from './Components/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </>
  )
}

export default App