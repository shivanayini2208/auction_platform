import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the custom CSS file

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here
        console.log('Registering with:', { username, email, password });
        navigate('/login'); // Redirect to login after registration
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Register</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                />
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
                <button 
                    type="submit" 
                    className="register-button"
                >
                    Create Account
                </button>
            </form>
            <div className="link-container">
                <p>
                    Already have an account? 
                    <span 
                        onClick={() => navigate('/login')} 
                        className="link"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;