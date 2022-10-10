import {
  assets,
  customElement,
  customElementReact,
  document,
  extract,
  finish,
  parse,
  read,
  style,
  validate,
  webTypes
} from '@htmlplus/element/compiler/index.js';
import cpy from 'cpy';
import fs from 'fs';

export default [
  read(),
  parse(),
  validate(),
  extract({
    prefix: 'plus'
  }),
  assets({
    destination(context) {
      return `dist/${context.fileName}`;
    }
  }),
  style(),
  document({
    destination: 'dist/json/document.json'
  }),
  webTypes({
    destination: 'dist/json/web-types.json',
    packageName: '@htmlplus/core',
    packageVersion: '0.4.0',
    docUrl: () => ''
  }),
  customElement(),
  customElementReact({
    compact: true,
    destination: '../distributions/react',
    eventName(eventName) {
      return eventName.replace(/Plus/, '');
    },
    importerComponent(context) {
      return `@htmlplus/core/${context.fileName}#${context.componentClassName}`;
    },
    importerComponentType(context) {
      return `@htmlplus/core/types/components/${context.fileName}/${context.fileName}#${context.componentClassName}JSX`;
    }
  }),
  finish(() => {
    cpy(['package-lock.json', 'README.md'], 'dist');

    const raw = fs.readFileSync('package.json', 'utf8');

    const parsed = JSON.parse(raw);

    delete parsed.scripts;

    const stringified = JSON.stringify(parsed, null, 2);

    fs.writeFileSync('dist/package.json', stringified);
  })
];
