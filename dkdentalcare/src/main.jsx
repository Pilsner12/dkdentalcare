import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import hlavní komponenty
import './index.css';      // Globální styly

// Tento kód připojí komponentu App do elementu s id 'root' v index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
