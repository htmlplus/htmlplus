import compiler from '../../compiler/index.js';
import { extract, parse, read, style, validate } from '../../compiler/index.js';

const { start, next, finish } = compiler(read(), parse(), validate(), extract(), style({}));

(async () => {
  await start();

  const another = await next('./src/dev/components/another.tsx');
  // console.log(1, another);

  const element = await next('./src/dev/components/element.tsx');
  // console.log(2, element.script);

  const text = await next('./src/dev/components/text.tsx');
  // console.log(3, text.script);

  await finish();
})();
