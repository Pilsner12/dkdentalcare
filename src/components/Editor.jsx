import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Stylování editoru

const Editor = ({ data, onSave }) => {
  const [editorContent, setEditorContent] = useState(data || "");
  const [isClicked, setIsClicked] = useState(false); // Stav pro animaci tlačítka
  const [isHovered, setIsHovered] = useState(false); // Stav pro efekt při najetí myší

  const handleSave = () => {
    if (onSave) {
      onSave(editorContent);
    }
    setIsClicked(true); // Spustí animaci
    setTimeout(() => setIsClicked(false), 200); // Resetuje animaci po 200ms
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        width: "90%", // Flexibilní šířka
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxSizing: "border-box",
      }}
    >
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        theme="snow"
        style={{
          height: "calc(50vh - 50px)", // Flexibilní výška
          minHeight: "200px", // Minimální výška
          marginBottom: "20px",
          borderRadius: "4px",
        }}
      />
      <div style={{ textAlign: "center", marginTop: "65px" }}>
        <button
          onClick={handleSave}
          onMouseOver={() => setIsHovered(true)} // Nastaví stav při najetí myší
          onMouseOut={() => setIsHovered(false)} // Resetuje stav při opuštění myší
          className={`${isClicked ? "button-clicked" : ""} ${
            isHovered ? "button-hovered" : ""
          }`}
          style={{
            padding: "10px 20px",
            backgroundColor: isHovered ? "#0056b3" : "#007BFF", // Změna barvy při najetí
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            width: "100%", // Tlačítko se přizpůsobí šířce na mobilu
            maxWidth: "200px", // Maximální šířka tlačítka
            transform: isClicked ? "scale(0.9)" : isHovered ? "scale(1.05)" : "scale(1)", // Zmenšení při kliknutí
            boxShadow: isClicked ? "0 4px 15px rgba(0, 123, 255, 0.5)" : "none", // Jemný stín při kliknutí
            transition: "transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease", // Plynulý přechod
          }}
        >
          Uložit
        </button>
      </div>
    </div>
  );
};

export default Editor;