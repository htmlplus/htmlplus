import compiler, { extract, parse, read } from '@htmlplus/element/compiler/index.js';
import path from 'path';
import { pascalCase } from 'change-case';
import { codesandbox, javascript, prepare, react, vue } from './plugins/index.js';

const { start, next, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: 'plus'
  }),
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
  })
);

(async () => {
  await start();
  await next('./src/aspect-ratio/default/readme.md');
  await finish();
})();
