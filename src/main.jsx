import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import hlavní komponenty
import "./index.css"; // Globální styly
import { AuthProvider } from "./admin/AuthContext";

// Tento kód připojí komponentu App do elementu s id 'root' v index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);