import compiler, { extract, parse, read } from '@htmlplus/element/compiler/index.js';
import { pascalCase } from 'change-case';
import glob from 'fast-glob';
import path from 'path';
import { codesandbox, document, download, javascript, prepare, preview, react, vue } from './plugins/index.js';

const exceptions = ['aspect-ratio', 'avatar-group', 'button-navigation', 'click-outside', 'scroll-indicator'];

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
  preview({
    componentRefrence: '@htmlplus/react',
    componentNameConvertor(name) {
      const exception = exceptions.find((exception) => name.indexOf(exception) != -1);
      if (exception) name = name.replace(exception, pascalCase(exception));
      return name.replace('plus-', '').split('-').map(pascalCase).join('.');
    },
    eventNameConvertor(name) {
      return name.replace('onPlus', 'on');
    }
  }),
  react({
    componentRefrence: '@htmlplus/react',
    componentNameConvertor(name) {
      const exception = exceptions.find((exception) => name.indexOf(exception) != -1);
      if (exception) name = name.replace(exception, pascalCase(exception));
      return name.replace('plus-', '').split('-').map(pascalCase).join('.');
    },
    destination(context) {
      return path.join(context.directoryPath, 'react-dedicated');
    },
    eventNameConvertor(name) {
      return name.replace('onPlus', 'on');
    }
  }),
  vue({
    dedicated: false,
    destination(context) {
      return path.join(context.directoryPath, 'vue');
    }
  }),
  // TODO
  // vue({
  //   dedicated: true,
  //   destination(context) {
  //     return path.join(context.directoryPath, 'vue-dedicated');
  //   }
  // }),
  codesandbox({
    sources(context) {
      return [
        `${context.directoryPath}/javascript`,
        `${context.directoryPath}/react-dedicated`,
        `${context.directoryPath}/vue`
      ];
    },
    destination(context) {
      return path.join(context.directoryPath, 'codesandbox');
    }
  }),
  download({
    sources(context) {
      return [
        `${context.directoryPath}/javascript`,
        `${context.directoryPath}/react-dedicated`,
        `${context.directoryPath}/vue`
      ];
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
