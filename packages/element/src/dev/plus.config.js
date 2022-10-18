import { customElement, extract, parse, read, style, validate } from '../../dist/compiler/index.js';

export default [read(), parse(), validate(), extract(), style(), customElement({ typings: false })];
