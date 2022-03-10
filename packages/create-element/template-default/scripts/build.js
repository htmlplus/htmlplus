import compiler from '@htmlplus/element/compiler';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import glob from 'glob';
import { rollup } from 'rollup';
import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import plugins from '../plus.config.js';

const { start, next, finish } = compiler(...plugins);

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: glob.sync('./src/**/*.tsx'),
  output: [
    {
      format: 'esm',
      dir: 'dist',
    },
  ],
  plugins: [
    {
      name: 'htmlplus',
      async buildStart() {
        await start();
      },
      async load(id) {
        if (!id.endsWith('.tsx')) return null;

        const { script } = await next(id);

        return script;
      },
      async buildEnd() {
        await finish();
      },
    },

    resolve({
      browser: true,
    }),

    commonjs(),

    typescript(),

    terser({
      format: {
        comments: false,
      },
    }),

    summary(),
  ],
};

(async () => {
  const bundle = await rollup(options);

  for (const output of options.output) await bundle.write(output);

  await bundle.close();
})();
