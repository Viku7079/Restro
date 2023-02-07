import React from 'react'
import "./Home.css";
import Menu from "./Menu"

const Home = () => {
  return (
    <div className='Home'>
       <h5><img src="https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/restaurant_24px.svg"/>Food's Resturant</h5>
        <div className='welcome'>
            <p>Welcome to Food's </p>
            <p className='p2'>Kitchen</p>
            <button id='btn2'>Go To Menu</button>
            
        </div>
    </div>
  )
}

export default Home;