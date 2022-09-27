import fs from 'fs-extra';
import path from 'path';

import { Context } from '../../types/index.js';

const defaults: AssetsOptions = {
  destination(context: Context) {
    return `assets/${context.fileName}`;
  },
  source(context: Context) {
    return path.join(context.directoryPath!, 'assets');
  }
};

export type AssetsOptions = {
  destination: (context: Context) => string;
  source?: (context: Context) => string;
};

export const assets = (options: AssetsOptions) => {
  const name = 'assets';

  options = Object.assign({}, defaults, options);

  const next = (context: Context) => {
    const destination = options.destination?.(context);

    const source = options.source?.(context);

    if (!source) return;

    if (!fs.existsSync(source)) return;

    context.assets = source;

    fs.copySync(source, destination);
  };

  return { name, next };
};
