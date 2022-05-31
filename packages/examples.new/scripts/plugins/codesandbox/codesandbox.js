import {
  __dirname, renderTemplate,
} from "@htmlplus/element/compiler/utils/index.js";
import glob from "fast-glob";
import path from "path";
import fs from "fs";
import { getParameters } from "codesandbox/lib/api/define.js";

export const codesandbox = (options) => {
  const name = "codesandbox";
  const next = (context) => {

    // TODO
    const frameworks = ['react']

    for (const framework of frameworks) {

      const root = `${context.directoryPath}/${framework}`

      const files = {};

      glob.sync(`${root}/**/*.*`).forEach((filepath) => {
        const key = filepath.split(`${root}/`).pop();
        files[key] = {
          content: fs.readFileSync(filepath, 'utf8')
        }
      });

      const parameters = getParameters({ files });

      const source = "templates/**/*.*";

      const destination = path.join(context.directoryPath, "codesandbox");

      const config = {
        cwd: __dirname(import.meta.url),
      };

      const model = { framework, parameters };

      renderTemplate(source, destination, config)(model);
    }
  };
  return {
    name,
    next,
  };
};
