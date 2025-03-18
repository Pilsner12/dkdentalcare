# PAGES

Pokud máš v aplikaci více stránek, což je běžné u Single Page Applications (SPA), kde používáš například React Router, můžeš zde mít jednotlivé komponenty pro každou stránku. Každá stránka bude reprezentovat určitou část aplikace, která je zobrazena na určité URL.

Home.jsx: Domovská stránka aplikace.
About.jsx: Stránka o aplikaci nebo o firmě.
Contact.jsx: Kontakt na firmu nebo informace pro zákazníky.
Příklad stránky Home.jsx:

jsx

// src/pages/Home.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to our website!</h1>
      <Footer />
    </div>
  );
};

export default Home;