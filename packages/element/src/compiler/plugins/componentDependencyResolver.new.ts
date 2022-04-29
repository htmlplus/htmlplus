import { Context } from '../../types/index.js';
import { visitor } from '../utils/index.js';

export const componentDependencyResolverNew = () => {
  const name = 'comoponent dependency resolver new';

  const next = (context: Context, global: any) => {
    if (!context.dependenciesUnresolved) {
      context.dependenciesUnresolved = [];
      visitor(context.fileAST!, {
        JSXOpeningElement(path) {
          const name = path.node.name.name;
          if (!name.includes('-')) return;
          context.dependenciesUnresolved?.push(name);
        }
      });
    }
    if (context.dependenciesUnresolved?.length) {
      Object.keys(global.contexts).forEach((filePath) => {
        const current = global.contexts[filePath] as Context;
        const find = context.dependenciesUnresolved?.includes(current.componentTag!);
        if (!find) return;
        context.dependencies ??= [];
        context.dependencies.push(current);
        context.dependenciesUnresolved = context.dependenciesUnresolved?.filter(
          (dependency) => dependency != context.componentTag
        );
      });
    }
    debugger;
  };

  return {
    name,
    next
  };
};
