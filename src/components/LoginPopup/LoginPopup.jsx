import React, { useState } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h1>{currState}</h1>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState ==="Login"?<></>:<input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='enter your password' required />
        </div>
        <button>{currState === "Sign Up"?"Creater account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {
          currState === "Login"
          ?<p>Create New Account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
          :<p>Already have an account<span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
