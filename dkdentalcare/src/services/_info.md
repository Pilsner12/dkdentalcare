# SERVICES

Tento adresář může obsahovat všechny související API služby. Například pokud aplikace komunikuje s backendem (serverem), zde budou soubory pro API volání a interakci s backendem.

api.js: Konfigurace pro API volání.
authService.js: Funkce pro přihlašování uživatelů, registrace, logování, atd.
Příklad služby api.js:

javascript

// src/services/api.js
const API_URL = 'https://api.example.com/';

const fetchData = async (endpoint) => {
  const response = await fetch(`${API_URL}${endpoint}`);
  return await response.json();
};

export { fetchData };