import compiler, { extract, parse, read } from '@htmlplus/element/compiler/index.js';
import { pascalCase } from 'change-case';
import glob from 'fast-glob';
import path from 'path';
import { document, javascript, prepare, preview, react, vue } from './plugins/index.js';

const componentNameConvertor = (name) => {
  const exceptions = ['aspect-ratio', 'button-navigation', 'click-outside', 'scroll-indicator'];
  const exception = exceptions.find((exception) => name.indexOf(exception) != -1);
  if (exception) name = name.replace(exception, pascalCase(exception));
  return name.replace('plus-', '').split('-').map(pascalCase).join('.');
};

const eventNameConvertor = (name) => {
  return name.replace('onPlus', 'on');
};

const { start, next, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: 'plus'
  }),
  javascript({
    componentRefrence(name) {
      return `https://cdn.jsdelivr.net/npm/@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    destination(context) {
      return path.join(context.directoryPath, 'javascript');
    }
  }),
  react({
    componentRefrence: '@htmlplus/react',
    componentNameConvertor,
    destination(context) {
      return path.join(context.directoryPath, 'react-dedicated');
    },
    eventNameConvertor
  }),
  vue({
    dedicated: false,
    componentRefrence(name) {
      return `@htmlplus/core/${name.split('-').slice(1).join('-')}.js`;
    },
    destination(context) {
      return path.join(context.directoryPath, 'vue');
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
