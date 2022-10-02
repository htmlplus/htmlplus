import compiler from '../../compiler/index.js';
import { customElement, extract, parse, read, style, validate } from '../../compiler/index.js';

const { start, next, finish } = compiler(
  read(),
  parse(),
  validate(),
  extract(),
  style({}),
  customElement({ typings: false })
);

(async () => {
  await start();

  const result = await next('./src/dev/components/element.tsx');

  console.log(result.script);

  await finish();
})();
