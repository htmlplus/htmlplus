import { __dirname } from '@htmlplus/element/compiler/utils/index.js';
import glob from 'fast-glob';
import fs from 'fs';
import JSZip from 'jszip';
import path from 'path';

export const zip = (options) => {
  const name = 'zip';
  const next = async (context) => {
    const destination = options?.destination?.(context) || path.join(context.directoryPath, 'codesandbox');

    const sources = options?.sources?.(context);

    fs.rmSync(destination, { recursive: true, force: true });

    for (const source of sources) {
      const root = source.endsWith('/') ? source.slice(0, -1) : source;

      const fileName = path.basename(root);

      const files = glob.sync(`${root}/**/*.*`);

      if (!files.length) continue;

      const zip = new JSZip();

      for (const file of files) {
        const key = file.split(`${root}/`).pop();
        const content = fs.readFileSync(file, 'utf8');
        zip.file(key, content);
      }

      const content = await zip.generateAsync({ type: 'uint8array' });

      const file = path.join(destination, `${fileName}.zip`);

      const directory = path.dirname(file);

      if (!fs.existsSync(directory)) fs.mkdirSync(destination, { recursive: true });

      fs.writeFileSync(file, content);

      // TODO
      context.output ??= {};
      context.output.zip ??= {};
      context.output.zip[fileName] = fs.readFileSync(file);
    }
  };
  return {
    name,
    next
  };
};
