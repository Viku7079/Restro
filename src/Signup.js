import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (

    <div className='Box'>
        <div className='heading'>
            <h1>SignUp</h1>
            <form action="#">
            
            <label>Email:</label>
            <input type="email" placeholder='Enter your Email' id='ipt2' required/>
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
            
            <input id='btn1' type="submit" value="SignUp"/>
            <br/>
            <br/>
            
            </form>
        </div>
    </div>
  )
}

export default Signup