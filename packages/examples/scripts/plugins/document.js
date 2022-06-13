// TODO
import fs from 'fs';

export const document = (options) => {
  const name = 'document';
  const finish = (global) => {
    const outputs = [];
    for (const context of global.contexts) {
      const [component, example] = context.directoryPath.split(/[\/|\\]/g).slice(-2);
      const categories = Object.keys(context.output);
      for (const category of categories) {
        if (category == 'zip') continue;
        outputs.push({
          key: example,
          category,
          component,
          detail: context.output?.[category]
        });
      }
      const style = context.snippets.find((snippet) => snippet.key == 'style');
      outputs.push({
        key: example,
        category: 'custom-element',
        component,
        detail: {
          tag: context.componentTag,
          script: context.script,
          style: style?.content
        }
      });
    }
    const raw = JSON.stringify(outputs, null, 2);
    fs.writeFileSync(options?.destination, raw, 'utf8');
  };
  return {
    name,
    finish
  };
};
