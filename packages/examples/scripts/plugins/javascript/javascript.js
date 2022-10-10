import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import fs from 'fs';
import path from 'path';

import { format, formatFile, getSnippet, getTitle, isEvent, toFile } from '../../utils.js';

const getValue = (path) => {
  switch (path.node.expression.type) {
    case 'BinaryExpression':
      break;
    case 'BooleanLiteral':
    case 'NumericLiteral':
    case 'StringLiteral':
      return path.node.expression.value;
    case 'MemberExpression':
      break;
    case 'TemplateLiteral':
      break;
  }
};

export const javascript = (options) => {
  const name = 'javascript';
  const next = (context) => {
    const config = {
      cwd: __dirname(import.meta.url)
    };

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    const patterns = ['templates/**/*.*'];

    const title = getTitle(context);

    fs.rmSync(destination, { recursive: true, force: true });

    const visitors = {
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

          if (isEvent(name.name)) path.remove();
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
          const value = getValue(path);

          const isAttribute = path.parent.type === 'JSXAttribute';

          if (isAttribute) {
            switch (typeof value) {
              case 'undefined':
                // TODO
                path.parentPath.remove();
                break;
              default:
                path.replaceWith(t.stringLiteral(`${value}`));
                break;
            }
          } else {
            switch (typeof value) {
              case 'undefined':
              case 'boolean':
                path.remove();
                break;
              default:
                path.replaceWithSourceString(value);
                break;
            }
          }
        },
        MemberExpression(path) {
          const { object, property } = path.node;
          if (object.type != 'ThisExpression') return;
          path.replaceWith(property);
        }
      }
    };

    const script = (() => {
      let content = getSnippet(context, 'javascript:script')?.content || '';

      if (content && context.customElementNames?.length) {
        content = '\n' + content;
      }

      let dependencies = '';

      context.customElementNames.forEach((name) => {
        dependencies += `import '${options?.componentRefrence(name)}';\n`;
      });

      return dependencies + content;

      // TODO

      // const ast = t.cloneNode(context.fileAST, true);

      // visitor(ast, visitors.script);

      // const content = print(ast);

      // if (!content) return;

      // return format(content, { parser: 'babel' });
    })();

    const style = (() => {
      const content = getSnippet(context, 'style')?.content;

      if (!content) return;

      return format(content, { parser: 'css' });
    })();

    const template = (() => {
      const dedicated = getSnippet(context, 'javascript:template');

      if (dedicated) return dedicated.content;

      const ast = t.cloneNode(toFile(context.classRender), true);

      visitor(ast, visitors.template);

      const content = print(ast)?.trim();

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

    formatFile(path.join(destination, 'index.html'), { parser: 'html', embeddedLanguageFormatting: 'auto' });

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
