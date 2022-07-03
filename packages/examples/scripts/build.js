import compiler, { customElement, extract, parse, read } from '@htmlplus/element/compiler/index.js';
import { pascalCase } from 'change-case';
import glob from 'fast-glob';
import path from 'path';
import { codesandbox, document, download, javascript, prepare, react, vue } from './plugins/index.js';

const { start, next, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: 'plus'
  }),
  customElement({
    typings: false,
    destination(context) {
      return path.join(context.directoryPath, 'preview');
    }
  }),
  javascript({
    destination(context) {
      return path.join(context.directoryPath, 'javascript');
    }
  }),
  react({
    componentRefrence: '@htmlplus/react',
    componentNameConvertor(name) {
      // TODO
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
  vue({
    destination(context) {
      return path.join(context.directoryPath, 'vue');
    }
  }),
  vue({
    dedicated: true,
    destination(context) {
      return path.join(context.directoryPath, 'vue-dedicated');
    }
  }),
  codesandbox({
    sources(context) {
      return [`${context.directoryPath}/javascript`, `${context.directoryPath}/react`, `${context.directoryPath}/vue`];
    },
    destination(context) {
      return path.join(context.directoryPath, 'codesandbox');
    }
  }),
  download({
    sources(context) {
      return [`${context.directoryPath}/javascript`, `${context.directoryPath}/react`, `${context.directoryPath}/vue`];
    },
    destination(context) {
      return path.join(context.directoryPath, 'download');
    }
  }),
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
