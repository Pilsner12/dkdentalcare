import React, { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase-client";
import Editor from "../components/Editor";

const OrdinacniDoba = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("obsah")
        .select("obsah")
        .eq("typ", "ordinacni_doba")
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
      .eq("typ", "ordinacni_doba");

    if (error) {
      console.error("Chyba při ukládání dat:", error);
    } else {
      console.log("Data úspěšně uložena:", savedData);
      setData(savedData);
    }
  };

  if (loading) {
    return <p>Načítání...</p>;
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
        Ordinační doba
      </h1>
      <Editor data={data} onSave={handleSave} />
    </div>
  );
};

export default OrdinacniDoba;