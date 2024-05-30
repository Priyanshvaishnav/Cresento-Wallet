// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./styles/signIn.css";

// // import Web3 from 'web3';
// // import { Contract } from 'web3-eth-contract';

// // // Import the ABI for the CresentoCrossChainWallet contract
// // import CresentoCrossChainWalletABI from './CresentoCrossChainWallet.json';

// // // Configure the Web3 instance with your desired provider
// // const web3 = new Web3('https://your-ethereum-provider-url');

// // // Deployed contract address
// // const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// // // Create an instance of the contract
// // const contract = new Contract(CresentoCrossChainWalletABI, contractAddress);

// const SignIn: React.FC = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [recoveryEmail, setRecoveryEmail] = useState("");

//   const navigate = useNavigate();
//   const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   const handleRecoveryEmailChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setRecoveryEmail(e.target.value);
//   };
//   const handleBackHandler = () => {
//     navigate("/");
//     console.log("Handle Back Handler Working");
//   };
//   const createAccount = async () => {
//     console.log("Account Created!");
//     navigate("/walletpage");
//     //   try {
//     //   // Call the contract method to create the wallet
//     //   await contract.methods.createWallet(username, password, recoveryEmail).send({ from: 'YOUR_ACCOUNT_ADDRESS' });
//     //   console.log('Account created successfully');
//     // } catch (error) {
//     //   console.error('Error creating account:', error);
//     // }
//   };

//   return (
//     <div >
//       <button onClick={handleBackHandler}>Back</button>
//       <h1>Sign In</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={handleUsernameChange}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <button onClick={createAccount}>Sign In</button>
//       <button onClick={createAccount}>Forgot Password</button>
//     </div>
    
//   );
// };

// export default SignIn;


//---------------------------------------------------------------------------------------------
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/signIn.css";

// In-memory storage for user data (imported from Signup.tsx)
import { users } from "./SignUp";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleBackHandler = () => {
    navigate("/");
    console.log("Handle Back Handler Working");
  };

  const handleSignIn = async () => {
    try {
      // Find the user in the users array
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // User found, perform sign-in logic
        console.log("Sign-in successful!");

        // Connect to the backend
        // Example with WebSocket:
        const socket = io("http://your-backend-url");
        socket.emit("signIn", { username, password });
        socket.on("signInResponse", (response) => {
          if (response.success) {
            // Handle successful sign-in response from the backend
            console.log("Sign-in successful on the backend");
            navigate("/walletpage"); // Redirect to the walletpage or desired page
          } else {
            console.error("Error signing in:", response.error);
          }
        });

        // Example with API:
        // const response = await axios.post("/api/signIn", { username, password });
        // if (response.data.success) {
        //   console.log("Sign-in successful on the backend");
        //   navigate("/walletpage"); // Redirect to the walletpage or desired page
        // } else {
        //   console.error("Error signing in:", response.data.error);
        // }
      } else {
        console.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <button onClick={handleBackHandler}>Back</button>
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
      <button onClick={handleSignIn}>Sign In</button>
      {/* Assuming you have a separate component or logic for handling forgot password */}
      <button onClick={() => navigate("/forgotPassword")}>
        Forgot Password
      </button>
    </div>
  );
};

export default SignIn;