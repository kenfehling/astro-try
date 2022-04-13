import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [
			babel({
			  plugins: ['astroturf/plugin'],
			})
			// postcss({
			//   extract: 'app.css',
			//   modules: true,
			// //   plugins: [postcssNested],
			// }),
		  ]
	}
});
