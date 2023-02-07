import React from 'react'
import "./Login.css"


const Login = () => {
  return (
    <div className='wrapper'>
        <div className='wrapper2'>
    <div className='Login'>
        <div className='heading'>
        <h1>Login</h1>
        <div className='Input'>
            <label>Email:</label>
            <input type="text" placeholder='Enter your Email' id='input'/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type="password" placeholder="password" id='ipt'/>
            <br/>
            <br/>
            <button id='btn'>Login</button>
            <br/>
            <br/>
            
             <h6>Create new account ?</h6>
             </div>
        </div>
        </div>
        
        </div>
        
    </div>
    
  )
}

export default Login