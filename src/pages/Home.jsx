import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import OrdinacniDoba from "../components/OpeningTime";
import "./Home.css";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Box className="home-container">
      <Box className="background-overlay" />
      <Box className="content-wrapper">
        {/* Nadpis 1 */}
        <Typography
          variant="h2"
          component="h1"
          className="main-title"
          aria-label="Stomatologická péče"
        >
          Stomatologická péče
        </Typography>

        {/* Nadpis 2 */}
        <Typography
          variant="h3"
          component="h2"
          className="sub-title"
          aria-label="pro celou Vaši rodinu"
        >
          pro celou Vaši rodinu.
        </Typography>

        {/* Umístění Ordinační doby */}
        <Box
          className="opening-time-wrapper"
          sx={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s",
          }}
        >
          <OrdinacniDoba />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
