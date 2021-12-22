import {
  attach,
  extract,
  parse,
  print,
  read,
  sass,
  typing,
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
  attach({
    members: true,
    styles: true,
  }),
  typing({
    prefix: 'plus'
  }),
  uhtml(),
  print(),
]