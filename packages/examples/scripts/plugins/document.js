// TODO
import fs from 'fs';

export const document = (options) => {
  const name = 'document';
  const finish = (global) => {
    const outputs = [];
    for (const context of global.contexts) {
      const [component, example] = context.directoryPath.split(/[\/|\\]/g).slice(-2);
      for (const output of context.outputs) {
        if (output.name == 'prepare') {
          const description = output.output.find((x) => x.key == 'readme')?.context;
          if (!description) continue;
          outputs.push({
            key: example,
            category: 'description',
            component,
            detail: description
          });
          continue;
        }
        let name = output.name;
        if (name == 'react') name = 'react-dedicated';
        if (name == 'vue' && output.options?.dedicated) name = 'vue-dedicated';
        outputs.push({
          key: example,
          category: name,
          component,
          detail: output.output
        });
      }
    }
    const raw = JSON.stringify(outputs, null, 2);
    fs.writeFileSync(options?.destination, raw, 'utf8');
  };
  return {
    name,
    finish
  };
};
