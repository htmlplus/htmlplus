import compiler from "@htmlplus/element/compiler/index.js";
import path from "path";
import plugins from "../plus.config.js";

const { start, next, finish } = compiler(...plugins);

(async () => {
  await start();

  const another = await next("./src/aspect-ratio/base/default.md");
  console.log(1, another);

  await finish();
})();
