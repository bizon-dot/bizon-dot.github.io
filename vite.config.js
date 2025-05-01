import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/bizon-dot.github.io/",
  plugins: [react()],
});
