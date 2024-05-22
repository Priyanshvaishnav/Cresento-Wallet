import React from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import './styles/Landing.css';
import Signup from './SignUp';
import Signin from './SignIn';
import WalletPage from './walletPage';

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
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1 className="title">Cresento Business Wallet</h1>
              <p className="subtitle">The Future of Trustworthy Business Transactions</p>
              <button className="button" onClick={handleSignUp}>
                First Time? Sign Up!
              </button>
              <button className="button" onClick={handleSignIn}>
                Already User? Sign In!
              </button>
            </div>
          }
        />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
      </Routes>
  );
};

export default LandingPage;