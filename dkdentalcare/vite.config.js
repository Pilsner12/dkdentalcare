import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-router-dom", "@mui/material", "@mui/icons-material"],
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
