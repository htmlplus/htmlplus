import compiler, {
  extract,
  parse,
  read,
} from "@htmlplus/element/compiler/index.js";
import path from "path";
import { pascalCase } from "change-case";
import { codesandbox, prepare, react } from "./plugins/index.js";

const { start, next, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: "plus",
  }),
  react({
    destination(context) {
      return path.join(context.directoryPath, "react");
    },
    customElementNameConvertor(name, context) {
      const exceptions = ["aspect-ratio", "button-navigation"];
      const exception = exceptions.find(
        (exception) => name.indexOf(exception) != -1
      );
      if (exception) name = name.replace(exception, pascalCase(exception));
      return name.replace("plus-", "").split("-").map(pascalCase).join(".");
    },
    eventNameConvertor(name) {
      return name.replace("onPlus", "on");
    },
  }),
  codesandbox({
    source(context) {
      return [
        `${context.directoryPath}/javascript`,
        `${context.directoryPath}/react`,
        `${context.directoryPath}/vue`,
      ];
    },
    destination(context) {
      return path.join(context.directoryPath, "codesandbox");
    },
  })
);

(async () => {
  await start();

  const another = await next("./src/aspect-ratio/default/readme.md");
  // console.log(1, another);

  await finish();
})();
