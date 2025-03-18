import { Box, Typography } from "@mui/material";
import React from 'react';

function Header() {
  return (
    <Box 
      sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer", margin: 1.5 }}
      onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
    >
      <img 
        src="/src/assets/icons/logo.png" 
        alt="DK Dental Care Logo" 
        style={{ height: 50 }} 
      />
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>DK</Typography>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            position: "relative",
            "&::before": { 
              content: '""', 
              display: "block", 
              width: "100%", 
              height: "2px", 
              backgroundColor: "yellow", 
              position: "absolute", 
              top: "-2px", 
              left: 0 
            } 
          }}
        >
          dental care s.r.o
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
