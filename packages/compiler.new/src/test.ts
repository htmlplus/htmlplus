import { compiler } from './compiler.js'
import {
  attach,
  docs,
  esbuild,
  extract,
  parse,
  print,
  read,
  scss,
  type,
  types,
  typescript,
  uhtml,
  validate,
  vscode,
} from './plugins/index.js'

const { start, next, finish } = compiler(
  read(),
  parse(),
  validate(),
  extract({
    prefix: "plus",
  }),
  scss({
    includePaths: ["./src/styles"],
  }),
  attach({
    members: true,
    styles: true,
  }),
  uhtml(),
  print(),
  esbuild()
)

  ; (async () => {
    await start()

    // await next('C:\\Users\\Samar\\Desktop\\dev\\packages\\core.new\\src\\components\\aspect-ratio\\aspect-ratio.tsx');
    const { script } = await next(
      'C:\\Users\\RD110\\Desktop\\dev\\packages\\components\\src\\components\\aspect-ratio\\aspect-ratio.tsx'
    )

    console.log(script)

    await finish()
  })()
