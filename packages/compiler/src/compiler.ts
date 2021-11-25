export type Plugin = {
  name: string;
  start?: Function;
  next?: Function;
  finish?: Function;
}

export const compiler = (...plugins: Array<Plugin>) => {

  const global = {
    contexts: {},
  }

  const start = async () => {

    for (const plugin of plugins) {

      if (!plugin.start) continue;

      await plugin.start(global);

      // TODO
      console.log(plugin.name + ' => ' + 'Started successfully.');
    }
  }

  const next = async (filename: string) => {

    const context: any = {
      filename,
      log(namespace: string, message: string) {
        console.log(
          filename.split('\\').pop() + ' => ' + namespace + ' => ' + message,
        );
      },
    }

    for (const plugin of plugins) {

      if (!plugin.next) continue;

      await plugin.next(context, global);

      context.log(plugin.name, 'Executed successfully.'); 
    }

    global.contexts[filename] = context;

    return context;
  }

  const finish = async () => {

    for (const plugin of plugins) {

      if (!plugin.finish) continue;

      await plugin.finish(global);

      // TODO
      console.log(plugin.name + ' => ' + 'Finished successfully.');
    }
  }

  return { 
    start,
    next, 
    finish,
  }
}
