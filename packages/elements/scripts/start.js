import compiler, * as plugins from '@htmlplus/element/compiler';
import glob from 'glob';
import path from 'path';
import { createServer } from 'vite';

const { start, next, finish } = compiler(
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
);

createServer({
  cacheDir: '.cache',
  server: {
    open: true,
  },
  resolve: {
    alias: [
      { 
        find: '@app', 
        replacement: path.resolve('src') 
      }
    ]
  },
  plugins: [
    {
      name: 'htmlplus',
      async buildStart() {
        await start();
      },
      async load(id) {

        if (id.endsWith('bundle.ts')) 
          return glob
            .sync(path.resolve('./src/**/browse.tsx'))
            .map((file) => `import '${file}';`)
            .join('\n');

        if (!id.endsWith('.tsx')) return null;

        const { script } = await next(id);

        return script;
      },
      async buildEnd() {
        await finish();
      }
    }
  ]
})
.then((server) => server.listen())
.catch((error) => console.log(error));