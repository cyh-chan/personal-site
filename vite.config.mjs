import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // must match Cloudflare Pages build output
  },
  base: "/", // ensures paths are correct
});
