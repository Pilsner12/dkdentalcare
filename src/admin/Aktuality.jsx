import  { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase-client";


// Custom logging function
const logError = (message, error) => {
  // Implement your logging logic here, e.g., send to a logging service
  console.log(message, error);
};


const Aktuality = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        // Log the error using a custom logging function
        logError("Chyba při načítání dat:", error)
        .select("obsah")
        .eq("typ", "aktuality")
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
      .eq("typ", "aktuality");

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
        Aktuality
      </h1>
      <Editor data={data} onSave={handleSave} />
    </div>
  );
};

export default Aktuality;