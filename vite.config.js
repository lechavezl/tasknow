import { resolve } from "path";
import { defineConfig } from "vite";


export default defineConfig({
    root: "src/",
    base: "/",
    build: {
      outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
        tasknowApp: resolve(__dirname, "src/tasknow-app/index.html"),
        
      },
    },
}});