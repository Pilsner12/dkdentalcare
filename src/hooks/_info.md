# HOOKS

Pokud potřebuješ nějakou opakovací logiku (např. komunikace s API nebo správa místních dat), můžeš si napsat vlastní hooky. Tyto hooky mohou být použity napříč aplikací bez nutnosti opakovat stejný kód.

useFetch.js: Hook pro načítání dat z API.
useLocalStorage.js: Hook pro práci s localStorage pro uchování dat v prohlížeči.
Příklad hooku useFetch.js:

javascript

// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [url]);

  return { data, error };
};

export default useFetch;