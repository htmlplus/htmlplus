import compiler, { customElement, extract, parse, read } from '@htmlplus/element/compiler/index.js';
import path from 'path';
import { pascalCase } from 'change-case';
import { codesandbox, documentSource, javascript, prepare, react, vue, zip } from './plugins/index.js';
import glob from 'fast-glob';

const { start, next, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: 'plus'
  }),
  // customElement({
  //   destination(context) {
  //     return path.join(context.directoryPath, 'preview');
  //   }
  // }),
  javascript({
    destination(context) {
      return path.join(context.directoryPath, 'javascript');
    }
  }),
  react({
    destination(context) {
      return path.join(context.directoryPath, 'react');
    },
    customElementNameConvertor(name, context) {
      // TODO
      const exceptions = ['aspect-ratio', 'button-navigation', 'scroll-indicator'];
      const exception = exceptions.find((exception) => name.indexOf(exception) != -1);
      if (exception) name = name.replace(exception, pascalCase(exception));
      return name.replace('plus-', '').split('-').map(pascalCase).join('.');
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
  codesandbox({
    source(context) {
      return [`${context.directoryPath}/javascript`, `${context.directoryPath}/react`, `${context.directoryPath}/vue`];
    },
    destination(context) {
      return path.join(context.directoryPath, 'codesandbox');
    }
  }),
  documentSource({
    destination: 'src/map.json'
  }),
  zip({
    source(context) {
      return [`${context.directoryPath}/javascript`, `${context.directoryPath}/react`, `${context.directoryPath}/vue`];
    },
    destination(context) {
      return path.join(context.directoryPath, 'zip');
    }
  })
);

(async () => {
  await start();
  const files = glob.sync(['./src/aspect-ratio/*/readme.md']);
  for (const file of files) await next(file);
  await finish();
})();
