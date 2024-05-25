import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, Route, Routes} from 'react-router-dom';
import './styles/index.css';
import './styles/App.css';
import LandingPage from './Landing';
import WalletPage from './walletPage';
import Signup from './SignUp';
import SignIn from './SignIn';
import Transaction from './Transaction';

const root = document.createElement("div")
root.className = "container"
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/walletpage" element={<WalletPage />} />
         <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path='/txn' element={<Transaction />} />
      </Routes>
    </MemoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
