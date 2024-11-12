import React from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import './styles/Landing.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign-up');
  };
  const handleSignIn = () => {
    navigate('/sign-in');
    console.log("Handle SignIn Working!");
  };
  return (
            <div className="container">
              <h1 className="title">Cresento Wallet</h1>
              <p className="subtitle">The Web3 Wallet for Secure Transactions</p>
              <button className="button" onClick={handleSignUp}>
                First Time? Sign Up!
              </button>
              <button className="button" onClick={handleSignIn}>
                Already a User? Sign In!
              </button>
            </div>
  );
};

export default LandingPage; 