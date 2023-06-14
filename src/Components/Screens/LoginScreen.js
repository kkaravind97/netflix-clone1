import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {

  const [signIn,setSignIn]=useState(false);
  return (
    <div className='login-screen'>
      <div className="loginScreen-background">
        <img 
            className='login-logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="" />
            <button className='signin-button' onClick={()=>setSignIn(true)}>Sign In</button>
            <div className="loginScreen-gradient"/>
      </div>
      <div className="login-body">
        {signIn ? (
          <SignUpScreen/>
        ):(
          <>
          <h1>Unlimited films, TV programes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="login-input">
              <form>
                  <input 
                      type="email" 
                      placeholder='Email Address'
                  />
                  <button className="login-button" onClick={()=>setSignIn(true)}>GET STARTED</button>
              </form>
          </div>
      </>
        )}
        
      </div>
    </div>
  )
}

export default LoginScreen
