import React, { useEffect, useState } from "react";
import "./styles/walletPage.css";
import {
  faCreditCard,
  faUserPlus,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { fetchBalance } from "./scripts/deploy";
import { SenderAccount } from "./data";


const WalletPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"tokens" | "activity">("tokens");
  const [accBal, setAccBal] = useState("");
  const logoutHandler = () => {
    navigate("/");
    console.log("Logout Handler Working");
  };
  useEffect(() => {
    fetchBalance(SenderAccount).then((res) => {
      console.log(res);
      setAccBal(res);
    });
  },[])
  const sendButtonHandler = () => {
    navigate("/txn");
  }
  return (
    <div className="wallet-container">
      <button className="logout-btn" onClick={logoutHandler}>
        Logout
      </button>
      <div className="wallet-overview">
        <h1 className="acc-bal">{accBal.substring(0, 8)} ETH</h1>
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
          <h2>Token Actions</h2>
          <div className="token-actions">
            <button className="buyBtn" onClick={sendButtonHandler}>
              <FontAwesomeIcon icon={faCreditCard} />
            </button>
            <button className="sellBtn">
              <FontAwesomeIcon icon={faUserPlus} />
            </button>
            <button className="sellBtn">
              <FontAwesomeIcon icon={faFileSignature} />{" "}
            </button>
          </div>
          <ul>
            <li>
              <span>ETH </span>
              <span>{accBal.substring(0, 8)}</span>
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
