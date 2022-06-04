import ora from 'ora';

import { Context, Global, Plugin } from '../types/index.js';

const logger = ora({
  color: 'yellow'
});

export default (...plugins: Array<Plugin>) => {
  let global: Global = {
    contexts: []
  };

  logger.start(`${plugins.length} Plugins found.`).succeed();

  const start = async () => {
    logger.start('Starting...').succeed();

    for (const plugin of plugins) {
      if (!plugin.start) continue;

      logger.start(`Plugin '${plugin.name}' starting...`);

      global = (await plugin.start(global)) || global;

      logger.start(`Plugin '${plugin.name}' started successfully.`);
    }

    logger.start(`Plugins started successfully.`).succeed();
  };

  const next = async (filePath: string) => {
    const key = filePath.split(/[\/|\\]/g).pop();

    let context: Context = {
      filePath
    };

    for (const plugin of plugins) {
      if (!plugin.next) continue;

      logger.start(`Plugin '${plugin.name}' executing...`);

      context = (await plugin.next(context, global)) || context;

      logger.start(`Plugin '${plugin.name}' executed successfully.`);

      global.contexts = global.contexts.filter((current) => current.filePath != context.filePath).concat(context);

      if (context.isInvalid) break;
    }

    if (context.isInvalid) logger.start(`File '${key}' break executing because file is invalid.`).succeed();

    return context;
  };

  const finish = async () => {
    logger.start('Finishing...').succeed();

    for (const plugin of plugins) {
      if (!plugin.finish) continue;

      logger.start(`Plugin '${plugin.name}' finishing...`);

      global = (await plugin.finish(global)) || global;

      logger.start(`Plugin '${plugin.name}' finished successfully.`);
    }

    logger.start(`Plugins finished successfully.`).succeed();
  };

  return {
    start,
    next,
    finish
  };
};
