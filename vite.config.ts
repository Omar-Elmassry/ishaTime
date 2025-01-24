import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Isha Time Calculator",
        short_name: "IshaTime",
        theme_color: "#030712",
        background_color: "#030712",
        icons: [
          {
            src: "/ishaTime/icons/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/ishaTime/icons/512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/ishaTime/screenshots/screenshot1.png",
            sizes: "640x480",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/ishaTime/screenshots/screenshot2.png",
            sizes: "320x480",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/ishaTime/",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "."),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
