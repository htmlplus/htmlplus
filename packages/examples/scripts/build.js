import compiler, { extract, parse, read } from '@htmlplus/element/compiler/index.js';
import { paramCase, pascalCase } from 'change-case';
import glob from 'fast-glob';
import path from 'path';

import {
  angular,
  document,
  javascript,
  prepare,
  preview,
  react,
  reactExperimental,
  svelte,
  vue
} from './plugins/index.js';

const { start, next, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: 'plus'
  }),
  angular({
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    componentNameConvertor(name) {
      return name;
    },
    destination(context) {
      return path.join(context.directoryPath, 'angular');
    },
    eventNameConvertor(name) {
      return '(' + paramCase(name).replace('on-', '') + ')';
    }
  }),
  javascript({
    componentRefrence(name) {
      return `https://unpkg.com/@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    componentNameConvertor(name) {
      return name;
    },
    destination(context) {
      return path.join(context.directoryPath, 'javascript');
    }
  }),
  react({
    componentRefrence() {
      return '@htmlplus/react';
    },
    componentNameConvertor(name) {
      const exceptions = ['aspect-ratio', 'button-navigation', 'click-outside', 'scroll-indicator'];
      const exception = exceptions.find((exception) => name.indexOf(exception) != -1);
      if (exception) name = name.replace(exception, pascalCase(exception));
      return name.replace('plus-', '').split('-').map(pascalCase).join('.');
    },
    destination(context) {
      return path.join(context.directoryPath, 'react');
    },
    eventNameConvertor(name) {
      return name.replace('onPlus', 'on');
    }
  }),
  reactExperimental({
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    destination(context) {
      return path.join(context.directoryPath, 'react@experimental');
    },
    eventNameConvertor(name) {
      if (name.indexOf('Plus') == -1) return name;
      return paramCase(name).replace('on-', 'on');
    }
  }),
  svelte({
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    componentNameConvertor(name) {
      return name;
    },
    destination(context) {
      return path.join(context.directoryPath, 'svelte');
    },
    eventNameConvertor(name) {
      return paramCase(name).replace('-', ':');
    }
  }),
  vue({
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    componentNameConvertor(name) {
      return name;
    },
    destination(context) {
      return path.join(context.directoryPath, 'vue');
    },
    eventNameConvertor(name) {
      return paramCase(name).replace('on-', '@');
    }
  }),
  preview(),
  document({
    destination: 'src/db.json'
  })
);

(async () => {
  await start();
  const files = glob.sync(['./src/*/*/readme.md']);
  for (const file of files) await next(file);
  await finish();
})();
