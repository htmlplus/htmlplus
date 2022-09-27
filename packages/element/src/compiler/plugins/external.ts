import fs from 'fs-extra';
import path from 'path';

import { Context } from '../../types/index.js';

const defaults: ExternalOptions = {
  destination(context: Context) {
    return `externals/${context.fileName}`;
  },
  source(context: Context) {
    return path.join(context.directoryPath!, 'external');
  }
};

export type ExternalOptions = {
  destination: (context: Context) => string;
  source?: (context: Context) => string;
};

export const external = (options: ExternalOptions) => {
  const name = 'external';

  options = Object.assign({}, defaults, options);

  const next = (context: Context) => {
    const destination = options.destination?.(context);

    const source = options.source?.(context);

    if (!source) return;

    if (!fs.existsSync(source)) return;

    fs.copySync(source, destination);
  };

  return { name, next };
};
