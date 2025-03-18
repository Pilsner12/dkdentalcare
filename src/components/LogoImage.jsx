import { Box } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const LogoImage = ({ src, alt }) => {
  return (
    <Box
      sx={{
        width: "150px", // Pevná šířka boxu
        height: "80px", // Pevná výška boxu
        padding: "10px", // Vnitřní odsazení
        display: "flex",
        alignItems: "center", // Vertikální zarovnání
        justifyContent: "center", // Horizontální zarovnání
        margin: "10px", // Vnější odsazení mezi boxy
        backgroundColor: "rgba(245, 245, 245, 0.9)", // Pozadí boxu
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Jemný stín
      }}
    >
      <img
        src={src.startsWith("/") ? src : `/assets/${src}`} // Automatická úprava cesty
        alt={alt} // Alternativní text pro obrázek
        style={{
          maxWidth: "100%", // Přizpůsobení šířky obsahu boxu
          maxHeight: "100%", // Přizpůsobení výšky obsahu boxu
        }}
      />
    </Box>
  );
};

LogoImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LogoImage;