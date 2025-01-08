// svelte.config.js
import vercel from '@sveltejs/adapter-vercel';
import netlify from '@sveltejs/adapter-netlify';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // adapter: vercel(),
        adapter: netlify(),

        // Optionally, specify other configurations here
    }
};

export default config;
