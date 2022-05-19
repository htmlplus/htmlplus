import {
  customElement,
  customElementReact,
  docs,
  external,
  extract,
  parse,
  read,
  style,
  validate
} from '@htmlplus/element/compiler/index.js';

export default [
  read(),
  parse(),
  validate(),
  extract({
    prefix: 'plus'
  }),
  style(),
  docs({
    dist: 'dist/docs.json'
  }),
  external({
    destination(context) {
      return `dist/${context.fileName}`;
    }
  }),
  customElement(),
  customElementReact({
    compact: true,
    dist: '../proxies/react',
    eventName(eventName) {
      return eventName.replace(/plus(\S*)/g, (match, group) => group.charAt(0).toLowerCase() + group.substr(1));
    },
    importerComponent(context) {
      return `@htmlplus/core/${context.fileName}#${context.componentClassName}`;
    },
    importerComponentType(context) {
      return `@htmlplus/core/types/components/${context.fileName}/${context.fileName}#${context.componentClassName}JSX`;
    }
  })
];
