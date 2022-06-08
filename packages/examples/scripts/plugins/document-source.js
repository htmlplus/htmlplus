// TODO
import fs from 'fs';

export const documentSource = (options) => {
  const name = 'document-source';
  const finish = (global) => {
    const outputs = {};
    for (const context of global.contexts) {
      const [component, example] = context.directoryPath.split(/[\/|\\]/g).slice(-2);
      outputs[component] = outputs[component] || {}
      outputs[component][example] = context.output
    }
    const raw = JSON.stringify(outputs, null, 2);
    fs.writeFileSync(options?.destination, raw, 'utf8');
  };
  return {
    name,
    finish
  };
};
