import * as plugins from '@htmlplus/compiler';
import glob from 'glob';
import path from 'path';
import { createServer } from 'vite';
import aliases from 'vite-tsconfig-paths';

const { start, next, finish } = plugins.compiler(
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

(async () => {
  
  const server = await createServer({
    // assetsInclude: '/public',
    cacheDir: '.cache',
    // configFile: false,
    server: {
      open: true,
    },
    plugins: [
      aliases(),
      {
        name: 'htmlplus',
        async buildStart() {
          await start();
        },
        async load(id) {

          if (id.endsWith('bundle.ts')) 
            return glob
              .sync(path.resolve('./src/**/aspect-ratio.tsx'))
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
  });

  await server.listen();
})();