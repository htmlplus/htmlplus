import {
  assets,
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
  style(),
  document({
    destination: 'dist/document.json'
  }),
  webTypes({
    destination: 'dist/web-types.json',
    packageName: '@htmlplus/core',
    packageVersion: '0.4.0',
    docUrl: () => ''
  }),
  assets({
    destination(context) {
      return `dist/${context.fileName}`;
    }
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
  })
];
