import { rollup as htmlplus } from '@htmlplus/element/bundler/index.js';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
import { rollup } from 'rollup';
import postcss from 'rollup-plugin-postcss';
// import summary from 'rollup-plugin-summary';
// import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import plugins from '../plus.config.js';

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/components/index.ts',
  output: [
    {
      format: 'esm',
      dir: 'dist',
      chunkFileNames: '[name].js',
      manualChunks(id) {
        const normalized = path.normalize(id).split(path.sep).join('/');

        if (normalized.includes('/src/components/'))
          return normalized.split('/src/components/').pop().split('/').shift();

        if (normalized.includes('cropperjs')) return 'vendors/cropperjs';

        if (normalized.includes('@popperjs')) return 'vendors/popperjs';

        return 'core';
      }
    }
  ],
  plugins: [
    postcss({
      inject: false,
      minimize: true,
      use: {
        sass: {
          data: `
            @import "./src/styles/mixins/index.scss";
            @import "./src/styles/variables/index.scss";
            @import "./src/styles/reset.scss";
          `
        }
      }
    }),

    htmlplus(...plugins),

    resolve({
      browser: true
    }),

    commonjs(),

    typescript({ useTsconfigDeclarationDir: true })

    // terser({
    //   format: {
    //     comments: false,
    //   },
    // }),

    // summary()
  ]
};

(async () => {
  try {
    const time = Date.now();

    const bundle = await rollup(options);

    for (const output of options.output) await bundle.write(output);

    await bundle.close();

    console.log(`Build in ${Date.now() - time}ms`);
  } catch (error) {
    console.log(error);
  }
})();
