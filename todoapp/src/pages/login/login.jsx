import React from 'react';
import './login.scss'; 
import login_pic from '../../assets/img/Authentication-rafiki.png';

function Login() {
  return (
    <div className="container">
      <section className="loginwindow">
        <div className="left-side">
          <img src={login_pic} alt="login_pic" />
        </div>
        <div className="right-side">
          <div className="userinput">
            <div className="title">
              <p id="welcome">Welcome back! 👋</p>
              <p id="loginacc">Login in your account</p>
            </div>
            <div className="email-password">
              <p>Email</p>
              <input type="email"/>
              <p>Password</p>
              <input type="password"/>
            </div>
            <div className="btn-login">
              <button>Login</button>
            </div>
            <a href="" className="forgot-password">Forget Password?</a>
            <a href="" className="create-account">Don't have an Account?</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
