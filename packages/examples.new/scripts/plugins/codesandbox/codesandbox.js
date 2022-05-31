import {
  __dirname, renderTemplate,
} from "@htmlplus/element/compiler/utils/index.js";
import glob from "fast-glob";
import path from "path";
import fs from "fs";
import LZString from "lz-string";

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

      const parameters = LZString.compressToBase64(JSON.stringify(files)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

      const href = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

      const source = "templates/**/*.*";

      const destination = path.join(context.directoryPath, "codesandbox");

      const config = {
        cwd: __dirname(import.meta.url),
      };

      const model = { framework, href };

      renderTemplate(source, destination, config)(model);
    }
  };
  return {
    name,
    next,
  };
};
