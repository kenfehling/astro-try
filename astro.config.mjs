import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import linaria from '@linaria/rollup';

export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [
			linaria.default({  // Usually just linaria() should work?
			  sourceMap: process.env.NODE_ENV !== 'production',
			})
		]
	}
});
