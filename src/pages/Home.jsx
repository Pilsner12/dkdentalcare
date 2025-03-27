import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import "./Home.css";

function Home({ handleScrollToSection }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="home-container">
      <Container>
        <Box className="content-wrapper">
          {/* Levá část */}
          <Box className="left-section">
            <Typography
              variant="h2"
              className="main-title"
              aria-label="Stomatologická péče"
            >
              Péče o vaše zuby s dlouholetou tradicí
            </Typography>
            <Typography
              variant="h5"
              className="sub-title"
              aria-label="pro celou Vaši rodinu"
            >
              Spojujeme léty ověřené metody s nejnovějšími postupy, abychom vám poskytli tu nejlepší péči.
            </Typography>
          </Box>

          {/* Pravá část */}
          <Box className="right-section"></Box>
        </Box>
        <Button
          className="home-button-order"
          onClick={() => handleScrollToSection("contact")}
        >
          Objednat se
        </Button>
      </Container>
    </div>
  );
}

export default Home;