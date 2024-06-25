import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses, including LAN
    port: 3000, // You can specify a port if you want
  },
});
