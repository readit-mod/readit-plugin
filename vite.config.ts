import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            name: "ReadIt Plugin",
            entry: "src/index.ts",
            formats: ["es"],
            fileName: () => "plugin.js"
        },
        outDir: "dist",
        minify: "esbuild",
        sourcemap: false
    }
});