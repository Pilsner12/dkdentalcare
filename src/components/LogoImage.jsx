import PropTypes from "prop-types";
import { Box } from "@mui/material";

const LogoImage = ({ src, alt }) => {
  return (
    <Box
      sx={{
        width: "150px", // Pevná šířka boxu
        height: "80px", // Pevná výška boxu
        padding: "10px",
        display: "flex",
        alignItems: "center", // Vertikální zarovnání
        justifyContent: "center", // Horizontální zarovnání
        margin: "10px", // Vnější odsazení mezi boxy
        backgroundColor: "rgba(245, 245, 245, 0.9)", // Pozadí boxu
        borderRadius: "0px", // Zaoblené rohy
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Jemný stín
      }}
    >
      <img
        src={src}
        alt={alt}
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
