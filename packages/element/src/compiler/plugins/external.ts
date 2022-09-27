import fs from 'fs-extra';
import path from 'path';

import { Context } from '../../types/index.js';

const defaults: ExternalOptions = {
  source(context: Context) {
    return path.join(context.directoryPath!, 'external');
  },
  destination(context: Context) {
    return '';
  }
};

export type ExternalOptions = {
  source?: (context: Context) => string;
  destination: (context: Context) => string;
};

export const external = (options: ExternalOptions) => {
  const name = 'external';

  options = Object.assign({}, defaults, options);

  const next = (context: Context) => {
    const source = options.source?.(context);

    if (!source) return;

    if (!fs.existsSync(source)) return;

    fs.copySync(source, options.destination(context));
  };

  return {
    name,
    next
  };
};
