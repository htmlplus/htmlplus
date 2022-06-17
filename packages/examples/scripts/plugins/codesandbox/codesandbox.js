import { __dirname, renderTemplate } from '@htmlplus/element/compiler/utils/index.js';
import { getParameters } from 'codesandbox/lib/api/define.js';
import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';

export const codesandbox = (options) => {
  const name = 'codesandbox';
  const next = (context) => {
    const output = {};

    const destination = options?.destination?.(context) || path.join(context.directoryPath, 'codesandbox');

    const sources = options?.sources?.(context);

    fs.rmSync(destination, { recursive: true, force: true });

    for (const source of sources) {
      const root = source.endsWith('/') ? source.slice(0, -1) : source;

      const fileName = path.basename(root);

      const files = glob.sync(`${root}/**/*.*`);

      if (!files.length) continue;

      const map = {};

      for (const file of files) {
        const key = file.split(`${root}/`).pop();
        map[key] = {
          content: fs.readFileSync(file, 'utf8')
        };
      }

      const parameters = getParameters({ files: map });

      const pattern = 'templates/**/*.*';

      const config = {
        cwd: __dirname(import.meta.url)
      };

      const model = { fileName, parameters };

      renderTemplate(pattern, destination, config)(model);

      // TODO
      output[fileName] = fs.readFileSync(path.join(destination, fileName + '.html'), 'utf8');
    }

    return output;
  };
  return {
    name,
    next
  };
};
