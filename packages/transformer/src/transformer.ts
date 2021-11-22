export const createTransformer = (...modules: Array<any>) => {

  const global = {
    contexts: {}
  };

  const start = async () => {
    await Promise.all(modules.map((module) => module?.start(global)));
  }
  
  const next = async (filename: string) => {

    const context = {
        filename
    };

    await Promise.all(modules.map((module) => module.next(context, global)));

    global.contexts[filename] = context;

    return context;
  }

  const end = async () => {
    await Promise.all(modules.map((module) => module?.finish(global)));
  }

  return { start, next, end }
}