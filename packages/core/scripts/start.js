import compiler from '@htmlplus/element/compiler';
import path from 'path';
import { createServer } from 'vite';
import plugins from '../plus.config.js';

const { start, next, finish } = compiler(...plugins);

createServer({
  root: 'src',
  cacheDir: '../.cache',
  server: {
    open: true
  },
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: path.resolve('src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/mixins/index.scss";
          @import "./src/styles/variables/index.scss";
          @import "./src/styles/reset.scss";
        `
      }
    }
  },
  plugins: [
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
    }
  ]
})
  .then((server) => server.listen())
  .catch((error) => console.log(error));
