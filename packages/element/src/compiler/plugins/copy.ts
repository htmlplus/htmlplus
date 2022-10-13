import fs from 'fs-extra';
import path from 'path';

const defaults: Partial<CopyOptions> = {
  at: 'finish',
};

export interface CopyOptions {
  at?: 'finish' | 'start';
  destination: string;
  source: string;
  transformer?: (parameters: { content: string }) => string
}

export const copy = (options: CopyOptions) => {
  const name = 'copy';

  options = Object.assign({}, defaults, options);

  const copy = (caller) => {
    if (options.at != caller) return;

    let content;

    content = fs.readFileSync(options.source, 'utf8');

    if (options.transformer)
      content = options.transformer({ content });

    fs.ensureDirSync(path.dirname(options.destination));

    fs.writeFileSync(options.destination, content, 'utf8');
  }

  const start = () => {
    copy('start');
  };

  const finish = () => {
    copy('finish');
  };

  return { name, start, finish };
}; 