import React, { useState } from 'react';
import './styles/walletPage.css';
import { FaPlus, FaMinus, FaExchangeAlt, FaArrowRight, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';

const WalletPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'nfts' | 'activity'>('tokens');

  return (
          <div className="wallet-container">
            <div className="wallet-overview">
              <h1 className="acc-bal">5.67 ETH</h1>
            </div>
            <div className="wallet-tabs">
              <button
                className={`tab-button ${
                  activeTab === "tokens" ? "active" : ""
                }`}
                onClick={() => setActiveTab("tokens")}
              >
                Tokens
              </button>
              <button
                className={`tab-button ${activeTab === "nfts" ? "active" : ""}`}
                onClick={() => setActiveTab("nfts")}
              >
                NFTs
              </button>
              <button
                className={`tab-button ${
                  activeTab === "activity" ? "active" : ""
                }`}
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
                  <a href="#">Import Token</a>
                  <a href="#">Refresh List</a>
                </div>
              </div>
            )}
            {activeTab === "nfts" && (
              <div className="wallet-nfts">
                Your NFTs will be displayed here.
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