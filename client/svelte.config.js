import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { preprocess } from 'svelte/compiler';

const config = { 
  kit: { 
    adapter: adapterNode() 
  }, 
  preprocess: vitePreprocess 
};

export default config;
