import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': '/src',
      '@v1': '/src/v1',
      '@v2': '/src/v2',
      '@shared': '/src/shared',
    },
  },
});
