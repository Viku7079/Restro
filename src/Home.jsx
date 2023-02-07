import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <>
      
        <div className='welcome'>
            <div className="content">
            <h5>Welcome to Food's Kitchen</h5>
            <NavLink to="/menu" className="btn2">GO TO MENU</NavLink>
            </div>
        </div>
    </>
    
  )
}

export default Home;