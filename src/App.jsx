import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-80">
                <div className="flex justify-between mb-4">
                    <button 
                        onClick={() => setIsLogin(true)} 
                        className={`p-2 ${isLogin ? 'font-bold text-blue-500' : 'text-gray-500'}`}
                        aria-label="Login"
                    >
                        Login
                    </button>
                    <button 
                        onClick={() => setIsLogin(false)} 
                        className={`p-2 ${!isLogin ? 'font-bold text-blue-500' : 'text-gray-500'}`}
                        aria-label="Register"
                    >
                        Register
                    </button>
                </div>

                {isLogin ? <Login /> : <Register />}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>
        </Router>
    );
};

export default App;

