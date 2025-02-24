import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <img src="/src/assets/icons/logo.png" alt="DK Dental Care Logo" style={{ height: 50 }} />
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>DK</Typography>
        <Typography variant="subtitle2">dental care s.r.o</Typography>
      </Box>
    </Box>
  );
}

export default Header;
