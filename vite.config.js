import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/typography-specimen-gallery/",
    build: {
        sourcemap: false,
    },
    plugins: [react()],
});
