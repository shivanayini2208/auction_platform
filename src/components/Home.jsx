import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the custom CSS file

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <header className="title-bar">
                <h1 className="title">eAuction</h1>
                <p className="subtitle">Your gateway to exciting auctions!</p>
                <nav className="button-container">
                    <button onClick={() => navigate('/auction-status')} className="title-button">Auction Status</button>
                    <button onClick={() => navigate('/auction-search')} className="title-button">Auction Search</button>
                    <button onClick={() => navigate('/bidder-enrollment')} className="title-button">Bidder Enrollment</button>
                    <button onClick={() => navigate('/login')} className="login-button">Login</button>
                </nav>
            </header>
            <div className="welcome-section">
                <h2>Welcome to eAuction!</h2>
                <p className="description">
                    eAuction is a platform that connects bidders and sellers in a dynamic auction environment. 
                    Explore various auctions, place your bids, and become a part of our vibrant community!
                </p>
            </div>
        </div>
    );
};

export default Home;