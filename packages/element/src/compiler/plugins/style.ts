import t from '@babel/types';
import fs from 'fs-extra';
import path from 'path';

import * as CONSTANTS from '../../constants/index.js';
import { Context } from '../../types';
import { addDependency } from '../utils/index.js';

const defaults: Partial<StyleOptions> = {
  references(context: Context) {
    return [
      path.join(context.directoryPath!, `${context.fileName!}.css`),
      path.join(context.directoryPath!, `${context.fileName!}.less`),
      path.join(context.directoryPath!, `${context.fileName!}.sass`),
      path.join(context.directoryPath!, `${context.fileName!}.scss`),
      path.join(context.directoryPath!, `${context.fileName!}.styl`)
    ];
  }
};

export type StyleOptions = {
  references?: (context: Context) => string[];
};

export const style = (options: StyleOptions) => {
  const name = 'style';

  options = Object.assign({}, defaults, options);

  const next = (context: Context) => {
    const references = options.references!(context);

    for (const reference of references) {
      if (!fs.existsSync(reference)) continue;
      context.stylePath = reference;
    }

    if (!context.stylePath) return;

    const local = addDependency(context.fileAST!, context.stylePath, 'AUTO_IMPORT_STYLE');

    const property = t.classProperty(
      t.identifier(CONSTANTS.STATIC_STYLES),
      t.identifier(local),
      undefined,
      null,
      undefined,
      true
    );

    context.class!.body.body.unshift(property);
  };

  return { name, next };
};
