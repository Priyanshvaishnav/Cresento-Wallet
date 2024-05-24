import React, { useState } from "react";
import "./styles/walletPage.css";
import {
  FaPlus,
  FaMinus,
  FaExchangeAlt,
  FaArrowRight,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { Route, Routes, useNavigate } from "react-router-dom";

const WalletPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"tokens" | "activity">("tokens");
  const logoutHandler = () => {
    navigate("/");
    console.log("Logout Handler Working");
  };
  return (
    <div className="wallet-container">
      <button className="logout-btn"onClick={logoutHandler}>Logout</button>
      <div className="wallet-overview">
        <h1 className="acc-bal">5.67 ETH</h1>
      </div>
      <div className="wallet-tabs">
        <button
          className={`tab-button ${activeTab === "tokens" ? "active" : ""}`}
          onClick={() => setActiveTab("tokens")}
        >
          Tokens
        </button>
        <button
          className={`tab-button ${activeTab === "activity" ? "active" : ""}`}
          onClick={() => setActiveTab("activity")}
        >
          Activity
        </button>
      </div>
      {activeTab === "tokens" && (
        <div className="wallet-tokens">
          <h2>Token Balances</h2>
          <div className="token-actions">
            <button className="buyBtn">
              <FaShoppingCart />
            </button>
            <button className="sellBtn">
              <FaWallet />
            </button>
          </div>
          <ul>
            <li>
              <span>ETH </span>
              <span>5.67</span>
            </li>
            <li>
              <span>BNB</span>
              <span>12.45</span>
            </li>
          </ul>
          <div className="token-links">
            <a href="#">Refresh List</a>
          </div>
        </div>
      )}
      {activeTab === "activity" && (
        <div className="wallet-activity">
          Your recent activities will be displayed here.
        </div>
      )}
    </div>
  );
};

export default WalletPage;
