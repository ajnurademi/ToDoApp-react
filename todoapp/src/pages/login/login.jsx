import React, { useState } from 'react';
import './login.scss'; 
import login_pic from '../../assets/img/Authentication-rafiki.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to save user data');
            }

            alert('User data saved successfully');
        } catch (error) {
            console.error('Error:', error.message);
            alert('Failed to save user data');
        }
    };

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
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p>Password</p>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="btn-login">
                            <button onClick={handleLogin}>Login</button>
                        </div>
                        <a href="#" className="forgot-password">Forget Password?</a> 
                        <a href="#" className="create-account">Don't have an Account?</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
