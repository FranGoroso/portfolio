import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swapy'], // Asegura que Swapy se procese correctamente
  },
  resolve: {
    alias: {
      // Opcional: define aliases si es necesario
    },
  },
});
