/src
│
├── assets/               # Statické soubory, které budou použity v aplikaci (obrázky, ikony, fonty)
│   ├── logo.svg
│   ├── logo.png
│   └── background.jpg
│
├── components/           # Komponenty, které jsou opakovaně použitelné v aplikaci
│   ├── Button.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Card.jsx
│
├── pages/                # Stránky, pokud máš více "stránek" v aplikaci (např. s React Router)
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── hooks/                # Vlastní hooky pro opakovanou logiku (např. práce s API, místní storage)
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   └── useAuth.js
│
├── utils/                # Pomocné utility funkce (např. formátování dat, validace, konverze)
│   ├── formatDate.js
│   ├── validateEmail.js
│   └── calculateTotal.js
│
├── services/             # API volání a interakce s backendem
│   ├── api.js
│   ├── authService.js
│   └── dataService.js
│
├── store/                # Skladování stavu aplikace (Redux, Context API, nebo jiný stavový manažer)
│   ├── actions.js
│   ├── reducers.js
│   └── store.js
│
├── App.jsx               # Hlavní komponenta aplikace
├── main.jsx              # Vstupní bod aplikace (ReactDOM render)
└── index.css             # Globální styly
