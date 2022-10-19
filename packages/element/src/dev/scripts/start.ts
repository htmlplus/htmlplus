import { createServer } from 'vite';

import { vite as htmlplus } from '../../../dist/bundlers/index.js';
import plugins from '../plus.config.js';

createServer({
  root: 'src/dev',
  server: {
    open: true,
    port: 3500
  },
  resolve: {
    alias: {
      '@htmlplus/element': '../../../dist'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '$color: pink;\n'
      }
    }
  },
  plugins: [htmlplus(...plugins)]
})
  .then((server) => server.listen())
  .catch((error) => console.log(error));
