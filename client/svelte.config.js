import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocess } from 'svelte/compiler';

const config = { kit: { adapter: adapter() }, preprocess: vitePreprocess };

export default config;
