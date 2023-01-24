import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import Accos from './conf/accos.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.html'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [ vitePreprocess() ],
	
	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				"*",
				"/",
				"/accomodations",
				"/imprint",
				"/location",
				"/terms",
				...Accos.map( (a) => { return `/accomodations/${a.path}`})
			]
		},
	}
};

export default config;
