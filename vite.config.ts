import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist", // standaard, maar maak dit expliciet
    },
    server: {
        proxy: {
            "/api": {
                target: "https://localhost:3001", // Your API server
                changeOrigin: true,
                secure: false,
            },
        },
        https: {
            key: fs.readFileSync("127.0.0.1+2-key.pem"),
            cert: fs.readFileSync("127.0.0.1+2.pem"),
        },
        host: true,
        port: 3000, // or any port you prefer
    },
});
