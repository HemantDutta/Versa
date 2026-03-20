import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
      '@': path.resolve(__dirname, 'src'),
      '@v1': path.resolve(__dirname, 'src/v1'),
      '@v2': path.resolve(__dirname, 'src/v2'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
});
