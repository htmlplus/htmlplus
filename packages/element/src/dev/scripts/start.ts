import { createServer } from 'vite';

import { vite as htmlplus } from '../../bundlers/index.js';
import plugins from '../plus.config.js';

createServer({
  server: {
    open: '/src/dev/index.html',
    port: 3500
  },
  resolve: {
    alias: {
      '@htmlplus/element/client': '/src/client/',
      '@htmlplus/element': '/src/client/index.js'
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
