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
  extract(),
  sass(),
  attach(),
  uhtml(),
  print(),
]