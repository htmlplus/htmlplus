import compiler from '@htmlplus/element/compiler';
import { createServer } from 'vite';
import plugins from '../plus.config.js';

const { start, next, finish } = compiler(...plugins);

createServer({
  cacheDir: '.cache',
  server: {
    open: true,
  },
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
  ],
})
  .then((server) => server.listen())
  .catch((error) => console.log(error));
