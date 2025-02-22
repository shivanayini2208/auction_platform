import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the custom CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Logging in with:', { email, password });
        navigate('/home'); // Redirect to home after login
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="link-container">
                <p>
                    <a href="#" className="link">Forgot Password?</a>
                </p>
                <p>
                    Don't have an account? 
                    <span 
                        onClick={() => navigate('/register')} 
                        className="link"
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;