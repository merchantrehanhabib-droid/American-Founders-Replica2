import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Humne yahan PORT aur BASE_PATH ka check hata diya hai
export default defineConfig({
  base: "/", // Vercel ke liye base path "/" hona chahiye
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: "dist", // Isay simple "dist" kar diya hai
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
