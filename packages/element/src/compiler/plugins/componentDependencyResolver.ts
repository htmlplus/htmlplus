import { Context } from '../../types/index.js';
import { visitor } from '../utils/index.js';

export const componentDependencyResolver = () => {
  const name = 'comoponent dependency resolver';

  const next = (context: Context, global: any) => {
    // update all components which depends on this component
    Object.values(global.contexts).map((ctx: any) => {
      ctx.componentDependencies = ctx.componentDependencies?.map((dep) => {
        if (dep.tag === context.componentTag) {
          dep.path = context.filePath;
        }
        return dep;
      });
    });

    context.componentDependencies = [];
    visitor(context.fileAST as any, {
      JSXOpeningElement: {
        enter(path) {
          const tag = path.node.name.name;

          if (tag.includes('-')) {
            context.componentDependencies!.push({ tag });
          }
        }
      }
    });

    // set path if this component depends on a component which was resolved before
    context.componentDependencies = context.componentDependencies.map((dep) => {
      Object.values(global.contexts).map((ctx: any) => {
        if (dep.tag === ctx.componentTag) {
          dep.path = ctx.filePath;
        }
      });
      return dep;
    });
  };

  return {
    name,
    next
  };
};
