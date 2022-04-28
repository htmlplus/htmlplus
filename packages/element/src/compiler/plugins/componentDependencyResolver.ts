import { Context } from '../../types/index.js';
import { visitor } from '../utils/index.js';

export const componentDependencyResolver = () => {
  const name = 'comoponent dependency resolver';

  const next = (context: Context, global: any) => {
    // TODO: it is not possible to use global.context because always it is empty
    // console.log(global.contexts)
    // global.contexts only have data in finish function of plugins

    // update other components if they depend on this component
    global.components = global.components.map((component) => {
      component.deps = component.deps.map((dep) => {
        if (dep.tag === context.componentTag) {
          return {
            ...dep,
            path: context.filePath
          };
        }
        return dep;
      });
      return component;
    });

    let deps: Array<{ tag: string; path?: string }> = [];

    context.componentDependencies = [];
    visitor(context.fileAST as any, {
      JSXOpeningElement: {
        enter(path) {
          const tag = path.node.name.name;

          if (tag.includes('-')) {
            deps.push({ tag });
          }
        }
      }
    });

    // set path if this component depends on a component which was resolved before
    global.components.forEach((component) => {
      deps = deps.map((dep) => {
        if (dep.tag === component.tag) {
          return {
            ...dep,
            path: component.path
          };
        }
        return dep;
      });
    });

    global.components.push({
      path: context.filePath,
      tag: context.componentTag,
      deps
    });

    context.componentDependencies = deps;
  };

  const start = (global: { components?: []; contexts: Context[] }) => {
    global.components = [];
    return global;
  };

  return {
    name,
    next,
    start
  };
};
