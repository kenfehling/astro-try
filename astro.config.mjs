import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import linaria from '@linaria/rollup';

console.log(linaria.default);

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [
			linaria.default({
			  sourceMap: process.env.NODE_ENV !== 'production',
			})
		]
	}
});
