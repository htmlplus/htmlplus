import fs from 'fs-extra';

import { Context } from '../../types';

export const read = () => {
  const name = 'read';

  const next = (context: Context) => {
    context.fileContent = context.fileContent ?? fs.readFileSync(context.filePath!, 'utf8');
  };

  return { name, next };
};
