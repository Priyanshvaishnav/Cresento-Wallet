import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/signIn.css";

interface UserCredentials {
  username: string;
  password: string;
}
const SignIn: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });
  const handleChange = (value: string, name: string) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );
    const user = registeredUsers.find(
      (u: { username: string; password: string }) =>
        u.username === userCredentials.username &&
        u.password === userCredentials.password
    );
    if (user) {
      signInHandler();
    } else {
      alert("Invalid USERNAME or PASSWORD.");
    }
  };
  const navigate = useNavigate();
  
  const handleBackHandler = () => {
    navigate("/");
    console.log("Handle Back Handler Working");
  };
  const signInHandler = async () => {
    console.log("Account Created!");
    navigate("/walletpage");
  };
  const forgotPassword = async () => {
    navigate("/");
  }
  return (
    <div>
      <button onClick={handleBackHandler}>Back</button>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userCredentials.username}
          onChange={(e: any) => {
            handleChange(e.target.value, "username");
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={userCredentials.password}
          onChange={(e: any) => {
            handleChange(e.target.value, "password");
          }}
        />
        <button  type="submit">
          Sign In
        </button>
      </form>
      <button onClick={forgotPassword}>Forgot Password</button>
    </div>
  );
};

export default SignIn;

