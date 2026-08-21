import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  root: "pages",
  publicDir: "../public",
  base: "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "../dist-pages",
    emptyOutDir: true,
  },
});
