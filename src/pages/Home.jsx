import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import OrdinacniDoba from "../components/OpeningTime";
import "./Home.css";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 1 sekunda
    return () => clearTimeout(timeoutId);
  }, []);

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
        <Box className="opening-time-wrapper" style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s' }}>
          <OrdinacniDoba />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;