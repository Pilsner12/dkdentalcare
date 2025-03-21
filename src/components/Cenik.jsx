import React, { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase-client";
import Editor from "../components/Editor";

const Cenik = () => {
  const [data, setData] = useState(""); // Stav pro data z databáze
  const [loading, setLoading] = useState(true); // Stav pro načítání

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("obsah")
        .select("obsah")
        .eq("typ", "cenik")
        .single();

      if (error) {
        console.error("Chyba při načítání dat:", error);
      } else {
        console.log("Načtená data:", data);
        setData(data ? data.obsah : "");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSave = async (savedData) => {
    const { error } = await supabase
      .from("obsah")
      .update({ obsah: savedData })
      .eq("typ", "cenik");

    if (error) {
      console.error("Chyba při ukládání dat:", error);
    } else {
      console.log("Data úspěšně uložena:", savedData);
      setData(savedData); // Aktualizace stavu po úspěšném uložení
    }
  };

  if (loading) {
    return <p>Načítání...</p>; // Zobrazení indikátoru načítání
  }

  return (
    <div>
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#black",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginTop: "20px",
        }}
      >
        Ceník
      </h1>
      <Editor data={data} onSave={handleSave} />
    </div>
  );
};

export default Cenik;