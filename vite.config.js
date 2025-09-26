import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // si tu deployes sur un sous-dossier, remplace par "/toavina-maria/"
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    host: true,
    port: process.env.PORT || 5173,
    allowedHosts: ["portfolio-on9o.onrender.com"],
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
