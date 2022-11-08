import t from '@babel/types';
import {
  __dirname,
  addDependency,
  print,
  removeUnusedImport,
  renderTemplate,
  visitor
} from '@htmlplus/element/compiler/utils/index.js';
import fs from 'fs';
import path from 'path';

import { format, getSnippet, getTitle, isEvent, toFile } from '../../utils.js';

export const angular = (options) => {
  const name = 'angular';
  const next = (context) => {
    const config = {
      cwd: __dirname(import.meta.url)
    };

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    const patterns = ['templates/**/*.*'];

    const title = getTitle(context);

    fs.rmSync(destination, { recursive: true, force: true });

    const visitors = {
      script: {
        ClassDeclaration: {
          enter(path) {
            const { id } = path.node;
            if (context.class.id.name == id.name) return;
            path.skip();
          },
          exit(path) {
            const { id } = path.node;

            id.name = 'AppComponent';

            path.node.decorators.push(
              t.decorator(
                t.callExpression(t.identifier('Component'), [
                  t.objectExpression([
                    t.objectProperty(t.identifier('selector'), t.stringLiteral('app-root')),
                    t.objectProperty(t.identifier('templateUrl'), t.stringLiteral('./app.component.html')),
                    t.objectProperty(
                      t.identifier('styleUrls'),
                      t.arrayExpression([t.stringLiteral('./app.component.css')])
                    )
                  ])
                ])
              )
            );

            path.replaceWith(t.exportNamedDeclaration(path.node));

            path.skip();
          }
        },
        ClassMethod(path) {
          const { key } = path.node;
          if (key.name != context.classRender.key.name) return;
          path.remove();
        },
        Decorator(path) {
          path.remove();
        },
        Program(path) {
          JSON.parse(JSON.stringify(context.customElementNames))
            .reverse()
            .forEach((name) => addDependency(path, options?.componentRefrence(name)));

          addDependency(path, '@angular/core', 'Component', 'Component');
        }
      },
      template: {
        ClassDeclaration(path) {
          path.replaceWithMultiple(path.node.body.body);
        },
        ClassMethod(path) {
          const { body } = path.node;

          const statement = body.body.find((element) => element.type === 'ReturnStatement');

          const element = statement.argument;

          const children = [];

          if (element.type == 'JSXFragment') {
            for (const child of element.children) {
              if (child.type == 'JSXText') continue;
              children.push(child);
            }
          } else {
            children.push(element);
          }

          path.replaceWithMultiple(children);
        },
        JSXAttribute(path) {
          const { name, value } = path.node;

          if (!value) return;

          const event = isEvent(name.name);

          if (isEvent(name.name)) {
            name.name = options?.eventNameConvertor?.(name.name) || name.name;
          }

          if (value.type != 'JSXExpressionContainer') return;

          // TODO
          const code = print(value.expression.body || value.expression);

          // TODO
          const newValue = code.replace(/this\.|;/, '').replace('event', '$event');

          // TODO
          path.node.value = t.stringLiteral(newValue);

          if (!event) name.name = `[${name.name}]`;
        },
        JSXElement(path) {
          const { openingElement, closingElement } = path.node;

          const name = openingElement.name.name;

          if (!/-/g.test(name)) return;

          const newName = options?.componentNameConvertor?.(name) || name;

          openingElement.name.name = newName;

          if (!closingElement) return;

          closingElement.name.name = newName;
        },
        JSXExpressionContainer(path) {
          path.replaceWithSourceString(`[[[${print(path.node.expression)}]]]`);
        },
        MemberExpression(path) {
          const { object, property } = path.node;
          if (object.type != 'ThisExpression') return;
          path.replaceWith(property);
        }
      }
    };

    const script = (() => {
      const ast = t.cloneNode(context.fileAST, true);

      visitor(ast, visitors.script);

      removeUnusedImport(ast);

      const content = print(ast);

      if (!content) return;

      return format(content, { parser: 'babel' });
    })();

    const style = (() => {
      const content = getSnippet(context, 'style')?.content;

      if (!content) return;

      return format(content, { parser: 'css' });
    })();

    const template = (() => {
      const ast = t.cloneNode(toFile(context.classRender), true);

      visitor(ast, visitors.template);

      const content = print(ast)
        ?.trim()
        ?.replace(/\[\[\[/g, '{{')
        ?.replace(/\]\]\]/g, '}}');

      if (!content) return;

      return format(content, { parser: 'html' });
    })();

    const model = {
      script,
      style,
      template,
      title
    };

    renderTemplate(patterns, destination, config)(model);

    return {
      script,
      style,
      template
    };
  };
  return {
    name,
    next
  };
};
