import compiler from '@htmlplus/element/compiler/index.js';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
import { rollup } from 'rollup';
import postcss from 'rollup-plugin-postcss';
import summary from 'rollup-plugin-summary';
// import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import plugins from '../plus.config.js';

const { start, next, finish } = compiler(...plugins);

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

    {
      name: 'htmlplus',
      async buildStart() {
        await start();
      },
      async load(id) {
        if (!id.endsWith('.tsx')) return;
        const { isInvalid, script } = await next(id);
        if (isInvalid) return;
        return script;
      },
      async buildEnd() {
        await finish();
      }
    },

    resolve({
      browser: true
    }),

    commonjs(),

    typescript({ useTsconfigDeclarationDir: true }),

    // terser({
    //   format: {
    //     comments: false,
    //   },
    // }),

    summary()
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
