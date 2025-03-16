import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // všechny závislosti z node_modules budou ve společném chunku "vendor"
          }
        }
      }
    }
  }
})
