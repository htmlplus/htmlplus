import { createCompiler } from '@htmlplus/compiler';
import * as plugins from '@htmlplus/compiler/plugins';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';
import path from 'path';
import { rollup } from 'rollup';
import { terser } from 'rollup-plugin-terser';

const { start, next, finish } = createCompiler(
  plugins.read(),
  plugins.parse(),
  plugins.validate(),
  plugins.extract({
    prefix: 'plus',
  }),
  plugins.scss({
    includePaths: ['./src/styles'],
  }),
  plugins.attach({
    members: true,
    styles: true,
  }),
  plugins.uhtml(),
  plugins.print(),
  plugins.esbuild()
);

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: glob.sync('./src/**/*.tsx'),
  output: [
    {
      format: 'es',
      dir: 'dist/esm',
      chunkFileNames: '[name].js',
      manualChunks(id) {
        
        const name = path.basename(id, path.extname(id));

        if (id.includes('cropperjs')) return 'core.cropperjs';

        if (id.includes('helpers')) return 'core.helpers';

        if (id.includes('popperjs')) return 'core.popperjs';

        if (id.includes('services')) return 'core.' + name;

        if (id.endsWith('.tsx')) return name;

        return 'core';
      },
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
      browser: true
    }),

    commonjs(),

    typescript(),

    terser(),
  ],
};

const build = async () => {
  
  const time = Date.now();

  const bundle = await rollup(options);

  for (const output of options.output) await bundle.write(output);

  await bundle.close();

  console.log(`Build in ${Date.now() - time}ms`);
};

build();
