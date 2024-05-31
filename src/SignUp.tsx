import React, { useState } from "react";
import "./styles/signUp.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import {web3} from "./scripts/deploy";
// import crypto from "crypto-browserify";

// global.crypto = global.crypto || crypto;




interface UserData {
  username: string;
  password: string;
  email: string;
  account: string;
}
const Signup: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
    email: "",
    account: "",
  });
  const navigate = useNavigate();
  const handleChange = (value: string, name: string) => {
    setUserData({ ...userData, [name]: value });
    console.log(name, value);
  };

  const handleBackHandler = () => {
    navigate("/");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Store user data in memory (e.g., in a global variable or state)
    if (!userData.username || !userData.password || !userData.email) {
      alert("Please fill in all fields");
      return;
    }
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );
    if (
      registeredUsers.some(
        (u: { username: string }) => u.username === userData.username
      )
    ) {
      alert("Username already taken");
      return;
    }
    if (userData.password.length < 4) {
      alert("Password must be at least 8 characters long");
      return;
    }
    const newAccount = web3.eth.accounts.create();
    userData.account = newAccount.address;
    registeredUsers.push(userData);
    console.log(userData.account);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    createAccount();

    alert("Registration successful!, Your account address is: " + userData.account);
  };
  const createAccount = async () => {
    console.log("Account Created!");

    navigate("/");
    console.log("Account Created Successfully");
  };

  return (
    <div>
      <button onClick={handleBackHandler}>Back</button>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e: any) => {
            handleChange(e.target.value, "username");
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e: any) => {
            handleChange(e.target.value, "password");
          }}
        />
        <input
          type="email"
          placeholder="Recovery Email"
          value={userData.email}
          onChange={(e: any) => {
            handleChange(e.target.value, "email");
          }}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
