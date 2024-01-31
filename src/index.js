import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContexProvider from './Context/ShopContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContexProvider>
    <App />
  </ShopContexProvider>
);


