import compiler, {
  extract,
  parse,
  read,
} from "@htmlplus/element/compiler/index.js";
import { pascalCase } from "change-case";
import { prepare, react } from "./plugins/index.js";

const { start, next, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: "plus",
  }),
  react({
    customElementNameConvertor(name, context) {
      const exceptions = ['button-navigation']
      const exception = exceptions.find((exception) => name.indexOf(exception) != -1)
      if (exception) name = name.replace(exception, pascalCase(exception))
      return name.replace('plus-', '').split('-').map(pascalCase).join('.');
    },
    eventNameConvertor(name) {
      return name.replace("onPlus", "on");
    },
  })
);

(async () => {
  await start();

  const another = await next("./src/aspect-ratio/default/readme.md");
  // console.log(1, another);

  await finish();
})();
