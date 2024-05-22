import React, { useState } from 'react';
import './styles/signUp.css';
// import Web3 from 'web3';
// import { Contract } from 'web3-eth-contract';

// // Import the ABI for the CresentoCrossChainWallet contract
// import CresentoCrossChainWalletABI from './CresentoCrossChainWallet.json';

// // Configure the Web3 instance with your desired provider
// const web3 = new Web3('https://your-ethereum-provider-url');

// // Deployed contract address
// const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// // Create an instance of the contract
// const contract = new Contract(CresentoCrossChainWalletABI, contractAddress);

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRecoveryEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecoveryEmail(e.target.value);
  };

  const createAccount = async () => {
      console.log('Account Created!');
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
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
          <button onClick={createAccount}>Sign In</button>
          <button onClick={createAccount}>Forgot Password</button>
    </div>
  );
};

export default SignIn;