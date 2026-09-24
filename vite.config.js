import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `npm run build` produces the minified /dist bundle required by the lab
// ("провести минификацию файлов веб-страниц"): esbuild minifies the JS,
// Vite's default CSS pipeline minifies the stylesheets, and the emitted
// index.html is minified too.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    minify: "esbuild",
    cssMinify: true,
    base: "/lab6/",
  },
});
