// import { compiler } from './compiler.js'
// import {
//   attach,
//   docs,
//   esbuild,
//   extract,
//   parse,
//   print,
//   read,
//   scss,
//   type,
//   types,
//   typescript,
//   uhtml,
//   validate,
//   vscode,
// } from './plugins'

// const { start, next, finish } = compiler(
//   // cache.load(),
//   read(),
//   parse(),
//   validate(),
//   extract({
//     prefix: 'plus',
//   }),
//   scss({
//     includePaths: ['./src/styles']
//   }),
//   attach({
//     members: true,
//     styles: true,
//   }),
//   uhtml({
//     dev: true,
//     prefix: 'plus',
//     dist: './dist/components',
//   }),
//   print(),
//   // type({
//   //   prefix: 'plus',
//   // }),
//   esbuild()
//   // types({
//   //   prefix: 'plus',
//   //   dist: './dist/types'
//   // }),
//   // docs({
//   //   prefix: 'plus',
//   //   dist: './dist/json/docs.json',
//   // }),
//   // vscode({
//   //   prefix: 'plus',
//   //   dist: './dist/json/html.html-data.json'
//   // }),
//   //   {
//   //     name: 'test',
//   //     start() {

//   //     },
//   //     next(c) {
//   // c.
//   //     },
//   //     finish() {

//   //     }
//   //   }
//   // write(),
//   // cache.save(), 
// )

//   ; (async () => {
//     await start()

//     await next('C:\\Users\\Samar\\Desktop\\dev\\packages\\core.new\\src\\components\\aspect-ratio\\aspect-ratio.tsx');
//     // await next(
//     //   'C:\\Users\\RD110\\Desktop\\dev\\packages\\core.new\\src\\components\\aspect-ratio\\aspect-ratio.tsx'
//     // )

//     await finish()
//   })()
