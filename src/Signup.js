import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (

    <div className='Box'>
        <div className='heading'>
            <h1>SignUp</h1>
            <div className='Input1'>
            <label>Email:</label>
            <input type="text" placeholder='Enter your Email' id='ipt2'/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type="password" placeholder="password" id='ipt2'/>
            <br/>
            <br/>
            <label>confirm Password:</label>
            <input type="password" placeholder=" confirm password" id='ipt2'/>
            <br/>
            <br/>
            
            <button id='btn1'>Submit</button>
            <br/>
            <br/>
            </div>
        </div>
    </div>
  )
}

export default Signup