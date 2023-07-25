import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContextProvider } from './context/cartContext.jsx'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};





const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CartContextProvider>
    <App />
  </CartContextProvider>
  // </React.StrictMode>,
)
