import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Honour PORT when the environment assigns one; otherwise Vite's default (5173).
  server: { port: process.env.PORT ? Number(process.env.PORT) : undefined },
});
