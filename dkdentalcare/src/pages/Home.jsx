import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";  // Importujeme Link pro smooth scroll

function Home() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('/src/assets/img/dentist-with-smile-lq.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        position: "relative",
        margin: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          fontFamily: '"Roboto", sans-serif',
          animation: "fadeIn 1.5s ease-in-out",
          px: 3, 
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
            fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
          }}
        >
          Stomatologická&nbsp;péče
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mt: 1,
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: "300",
            letterSpacing: "1px",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          pro celou Vaši rodinu.
        </Typography>
      </Box>

      {/* Tlačítko pro přechod na sekci Kontakt */}
      <Button
        component={Link}
        to="/contact" 
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: "1.4rem", sm: "1.3rem", md: "1rem" },
        }}
      >
        Kontaktujte nás
      </Button>
    </Box>
  );
}

export default Home;
