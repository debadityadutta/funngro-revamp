import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // GitHub Pages serves this project from /funngro-revamp/.
  base: '/funngro-revamp/',
  build: {
    rollupOptions: {
      input: {
        teen: resolve(__dirname, 'index.html'),
        companies: resolve(__dirname, 'companies/index.html')
      }
    }
  }
});
