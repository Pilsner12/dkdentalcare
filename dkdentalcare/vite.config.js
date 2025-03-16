import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-router-dom', '@mui/material', '@mui/icons-material', '@mui/icons-material/Menu', '@mui/icons-material/Close', '@mui/material/styles', 'react', 'react-dom', 'react-scripts'],
      output: {
        globals: {
          'react-router-dom': 'ReactRouterDOM',
          '@mui/material': 'MaterialUI',
          '@mui/icons-material': 'MaterialIcons',
        },
      },
    },
  },
});
