import adapterAuto from "@sveltejs/adapter-auto";
import adapterNode from "@sveltejs/adapter-node";
import adapterStatic from "@sveltejs/adapter-static";
import adapterCloudflare from "@sveltejs/adapter-cloudflare";

import { vitePreprocess } from "@sveltejs/kit/vite";

let adapter = adapterStatic;
const adapterEnv = process.env.SVELTEKIT_ADAPTER;

if (adapterEnv)
    switch (adapterEnv.toLowerCase()) {
        case "auto":
            adapter = adapterAuto;
            break;

        case "node":
            adapter = adapterNode;
            break;

        case "static":
            adapter = adapterStatic;
            break;

        case "cloudflare":
        case "cf":
            adapter = adapterCloudflare;
            break;
    }

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),

        alias: {
            "$styles/*": "src/styles/*",
            "$components/*": "src/components/*",
            "$routes/*": "src/routes/*",
            "$src/*": "src/*",
            "$util/*": "src/util/*",
            "$stores/*": "src/stores/*",
            "$assets/*": "src/assets/*",
        },

        paths:
            process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY
                ? {
                      base: "/" + process.env.GITHUB_REPOSITORY.split("/").pop(),
                  }
                : undefined,
    },
};

export default config;
