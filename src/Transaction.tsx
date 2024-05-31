import React, { useState } from "react";
import "./styles/signUp.css";
import {useNavigate } from "react-router-dom";
import { txHash } from "./data";


const Transaction: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRecoveryEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecoveryEmail(e.target.value);
  };
  const handleBackHandler = () => {
    navigate("/walletpage");
  };
  const handleSend = async () => {
    alert("Your transaction hash is: " + txHash);
    handleBackHandler();
    //   try {
    //   // Call the contract method to create the wallet
    //   await contract.methods.createWallet(username, password, recoveryEmail).send({ from: 'YOUR_ACCOUNT_ADDRESS' });
    //   console.log('Account created successfully');
    // } catch (error) {
    //   console.error('Error creating account:', error);
    // }
  };

  return (
    <div>
      <button onClick={handleBackHandler}>Back</button>
      <h1>Send Tokens</h1>
      <input
        type="email"
        placeholder="Send To"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="number"
        placeholder="Amount"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={recoveryEmail}
        onChange={handleRecoveryEmailChange}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Transaction;
