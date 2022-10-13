import {
  assets,
  copy,
  customElement,
  customElementReact,
  document,
  extract,
  parse,
  read,
  style,
  validate,
  webTypes
} from '@htmlplus/element/compiler/index.js';

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
  copy({
    at: 'finish',
    source: 'package-lock.json',
    destination: 'dist/package-lock.json'
  }),
  copy({
    at: 'finish',
    source: 'README.md',
    destination: 'dist/README.md'
  }),
  copy({
    at: 'finish',
    source: 'package.json',
    destination: 'dist/package.json',
    transformer({ content }) {
      const parsed = JSON.parse(content);
      delete parsed.scripts;
      return JSON.stringify(parsed, null, 2);
    }
  })
];
