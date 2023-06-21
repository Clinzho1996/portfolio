import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      mode: "development",
      registerType: "autoUpdate",
      includeAssets: ["./src/assets/logo.png", "./src/assets/*", "./sw.js"],
    }),
  ],
});
