import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'

import type { UserConfig } from 'vite';

const config: UserConfig = {
	server: {
    fs: {
      allow: ['conf', 'src', 'node_modules', 'content', 'photos', 'static']
    }
  },
	plugins: [sveltekit(), imagetools( {force: true} )]
};

export default config;
