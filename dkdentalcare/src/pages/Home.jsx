import React from "react";
import { Box, Typography } from "@mui/material";
import OrdinacniDoba from "../components/OpeningTime";
import "./Home.css";

function Home() {
  return (
    <Box className="home-container">
      <Box className="background-overlay" />
      <Box className="content-wrapper">
        {/* Nadpis 1 */}
        <Typography variant="h2" className="main-title">
          Stomatologická péče
        </Typography>

        {/* Nadpis 2 */}
        <Typography variant="h3" className="sub-title">
          pro celou Vaši rodinu.
        </Typography>

        {/* Umístění Ordinační doby */}
        <Box className="opening-time-wrapper">
          <OrdinacniDoba />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
