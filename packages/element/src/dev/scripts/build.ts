import compiler from '../../compiler/index.js';
import { extract, parse, read, style, validate } from '../../compiler/index.js';

const { start, next, finish } = compiler(read(), parse(), validate(), extract(), style({}));

(async () => {
  await start();

  await next('./src/dev/components/element.tsx');

  await finish();
})();
