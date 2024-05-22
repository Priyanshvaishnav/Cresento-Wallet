import React, { useState } from 'react';
import { FaEthereum, FaEllipsisV, FaChevronDown } from 'react-icons/fa';
import './styles/navbar.css';

interface Account {
  address: string;
  name?: string;
}

interface Chain {
  id: number;
  name: string;
  icon: JSX.Element;
}

const availableAccounts: Account[] = [
  { address: '0x1234567890abcdef' },
  { address: '0x0987654321fedcba', name: 'My Account' },
];

const availableChains: Chain[] = [
  { id: 1, name: 'Ethereum Mainnet', icon: <FaEthereum /> },
  { id: 3, name: 'Ropsten Test Network', icon: <FaEthereum /> },
  { id: 4, name: 'Rinkeby Test Network', icon: <FaEthereum /> },
];

const Navbar: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account>(availableAccounts[0]);
  const [selectedChain, setSelectedChain] = useState<Chain>(availableChains[0]);
  const [showChainDropdown, setShowChainDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const toggleChainDropdown = () => setShowChainDropdown(!showChainDropdown);
  const toggleAccountDropdown = () => setShowAccountDropdown(!showAccountDropdown);
  const toggleSettingsDropdown = () => setShowSettingsDropdown(!showSettingsDropdown);

  const handleAccountSelect = (account: Account) => {
    setSelectedAccount(account);
    setShowAccountDropdown(false);
  };

  const handleChainSelect = (chain: Chain) => {
    setSelectedChain(chain);
    setShowChainDropdown(false);
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="chain-dropdown">
          <div className="chain-icon-container" onClick={toggleChainDropdown}>
            {selectedChain.icon}
          </div>
          {showChainDropdown && (
            <ul className="chain-dropdown-menu">
              {availableChains.map((chain) => (
                <li key={chain.id} onClick={() => handleChainSelect(chain)}>
                  {chain.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <div className="account-info">
          <span className="network-name">{selectedChain.name}</span>
          <div className="account-dropdown">
            <span className="account-address" onClick={toggleAccountDropdown}>
              {shortenAddress(selectedAccount.address)} <FaChevronDown />
            </span>
            {showAccountDropdown && (
              <ul className="account-dropdown-menu">
                {availableAccounts.map((account, index) => (
                  <li key={index} onClick={() => handleAccountSelect(account)}>
                    {account.name || shortenAddress(account.address)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <button className="settings-button" onClick={toggleSettingsDropdown}>
          <FaEllipsisV />
        </button>
        {showSettingsDropdown && (
          <ul className="settings-dropdown-menu">
            <li>Settings</li>
            <li>Help</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;