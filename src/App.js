import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import Signup from './Signup';
import Login from "./Login";
import Home from './Home';
import Menu from './Menu';
import Error from './Error';


const App = () => {
  return (
    <div className="app">
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to ="/error" />}/>
      </Routes>
    </BrowserRouter>

      </div>
      
  )
}

export default App