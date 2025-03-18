import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    rollupOptions: {
      external: [
        "@mui/material",
        "@mui/icons-material",
        "@emotion/react",
        "@emotion/styled",
        
      ],
      output: {
        globals: {
          "@mui/material": "MaterialUI",
          "@mui/icons-material": "MaterialUIIcons",
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
        },
      },
    },
  },
});
