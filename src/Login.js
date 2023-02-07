import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Login.css"


const Login = () => {
  return (
    <div className='Box'>
        <div className='heading'>
            <h1>Login</h1>
            <form action="#">
            
            <label>Email:</label>
            <input type="email" placeholder='Enter your Email' id='ipt2' required/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type="password" placeholder="Password" id='ipt2'/>
            <br/>
            <br/>
                        
            <input id='btn1' type="submit" value="Login"/>
            <br/>
            <br/>
            <NavLink to="/signup">Create New Account</NavLink>
            
            </form>
        </div>
    </div>
    
  )
}

export default Login