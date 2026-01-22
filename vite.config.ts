import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist", // standaard, maar maak dit expliciet
    },
    server: {
        host: true,
        port: 3000, // or any port you prefer
    },
});
