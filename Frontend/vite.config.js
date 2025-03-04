import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        // target: "http://localhost:5000",
        target: "https://ticketing-jlk8.onrender.com",
        secure: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
