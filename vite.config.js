import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cdn from "vite-plugin-cdn-import";

export default defineConfig({
  plugins: [
    react(),
    cdn({
      modules: [
        {
          name: "@mui/material",
          var: "MaterialUI",
          path: "https://cdn.jsdelivr.net/npm/@mui/material@6.4.8/umd/material-ui.production.min.js",
        },
        {
          name: "@mui/icons-material",
          var: "MaterialUIIcons",
          path: "https://cdn.jsdelivr.net/npm/@mui/icons-material@6.4.8/umd/icons-material-ui.production.min.js",
        },
        {
          name: "@emotion/react",
          var: "EmotionReact",
          path: "https://cdn.jsdelivr.net/npm/@emotion/react@11.14.0/umd/emotion-react.production.min.js",
        },
        {
          name: "@emotion/styled",
          var: "EmotionStyled",
          path: "https://cdn.jsdelivr.net/npm/@emotion/styled@11.14.0/umd/emotion-styled.production.min.js",
        },
      ],
    }),
  ],
});
