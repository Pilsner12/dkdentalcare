# COMPONENTS

# Komponenty, které jsou opakovaně použitelné v aplikaci

V této složce se nacházejí jednotlivé React komponenty, které mohou být použity na více místech v aplikaci. Komponenty jsou obvykle zaměřeny na jednu logiku nebo zobrazení.

Button.jsx: Tlačítko, které se může používat na více místech v aplikaci.
Header.jsx: Hlavní navigační lišta nebo hlavička stránky.
Footer.jsx: Patička stránky.
Card.jsx: Karta, která zobrazuje nějaký obsah v hezkém formátovaném boxu.
Příklad komponenty Button.jsx:



// src/components/Button.jsx
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
};

export default Button;