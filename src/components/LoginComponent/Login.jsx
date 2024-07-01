import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/images/logo.png'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const [showLock,setShowLock] = useState(true)
  const handleShowLock=(e)=>{
    if(e.target.value === ''){
      setShowLock(true)
    }else{
      setShowLock(false)
    }
  }
  return (
    <div className='login-body'>
        <div className='login-body-leftpart'>
          <img src={logo} alt="" className='login-left-logo'/>
          <h1>Welcome Back</h1>
          <p>Your Comprehensive Solution for Efficient Workforce Management
          Sign in to access a complete suite of tools designed to streamline every aspect of your employee management processes.</p>
          <div>Let’s Get Started</div> 
        </div>
        <div className='login-body-rightpart'>
          <form action="">
            <h2>Login Account</h2>
            <div class="login-body-right-input">
                    <span class="login-body-right-input-icons">
                      <MdEmail />
                    </span>
                    <input type="text"  required/>
                    <label>Email</label>

                </div>
                <div class="login-body-right-input">
                    <span class="login-body-right-input-icons">
                      {showLock && (<FaLock />)}
                    </span>
                    <input type="password" required onChange={handleShowLock}/>
                    <label>Password</label>
                    
                </div>
            <div className='login-body-right-forget-password'> <p>Forget Password ?</p></div> 
            <div className='login-signin'><button>Sign In</button></div>
          </form>
        </div>
    </div>
  )
}

export default Login