import {
  attach,
  extract,
  parse,
  print,
  read,
  sass,
  uhtml,
  validate,
} from '@htmlplus/element/compiler';

export default [
  read(),
  parse(),
  validate(),
  extract({
    prefix: 'plus',
  }),
  sass({
    loadPaths: ['./src/styles'],
  }),
  attach(),
  uhtml(),
  print(),
]