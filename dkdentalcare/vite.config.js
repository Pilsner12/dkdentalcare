import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-router-dom", "@mui/material", "@mui/icons-material", '@mui/icons-material/Menu', '@mui/icons-material/Close', '@mui/material/styles', '@mui/material/Box', '@mui/material/Button', '@mui/material/AppBar', '@mui/material/Toolbar', '@mui/material/Container', '@mui/material/IconButton', '@mui/material/Drawer', '@mui/material/List', '@mui/material/ListItem', '@mui/material/ListItemText', '@mui/material/styles', '@mui/material/ThemeProvider'],
      output: {
        globals: {
          "react-router-dom": "ReactRouterDOM",
          "@mui/material": "MUI",
          "@mui/icons-material": "MUIIcons",
        },
      },
    },
  },
});
