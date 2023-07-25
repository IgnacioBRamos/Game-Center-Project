import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContextProvider } from './context/cartContext.jsx'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_apiKey,
  authDomain: import.meta.env.VITE_REACT_authDomain,
  projectId: import.meta.env.VITE_REACT_projectId,
  storageBucket: import.meta.env.VITE_REACT_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_messagingSenderId,
  appId: import.meta.env.VITE_REACT_appId
};





const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CartContextProvider>
    <App />
  </CartContextProvider>
  // </React.StrictMode>,
)
