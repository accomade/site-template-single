import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.html', ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [ vitePreprocess(), mdsvex(mdsvexConfig) ],



	kit: {
		adapter: adapter()
	}
};

export default config;
