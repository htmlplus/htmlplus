import { __dirname, renderTemplate } from '@htmlplus/element/compiler/utils/index.js';
import { getParameters } from 'codesandbox/lib/api/define.js';
import path from 'path';
import glob from 'fast-glob';
import fs from 'fs';

export const codesandbox = (options) => {
  const name = 'codesandbox';
  const next = (context) => {
    const sources = options?.source?.(context);

    for (const source of sources) {
      const root = source.endsWith('/') ? source.slice(0, -1) : source;

      const files = {};

      glob.sync(`${root}/**/*.*`).forEach((filepath) => {
        const key = filepath.split(`${root}/`).pop();
        files[key] = {
          content: fs.readFileSync(filepath, 'utf8')
        };
      });

      if (!Object.keys(files).length) continue;

      const parameters = getParameters({ files });

      const pattern = 'templates/**/*.*';

      const destination = options?.destination?.(context) || path.join(context.directoryPath, 'codesandbox');

      const config = {
        cwd: __dirname(import.meta.url)
      };

      const fileName = path.basename(root);

      const model = { fileName, parameters };

      renderTemplate(pattern, destination, config)(model);
    }
  };
  return {
    name,
    next
  };
};
