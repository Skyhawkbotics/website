import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],

    server: {
        port: 4000,
        hmr: {
            clientPort: 443,
            port: 4000,
            protocol: "wss",
        },
    },
});
