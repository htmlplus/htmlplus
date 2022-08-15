import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { camelCase, capitalCase } from 'change-case';
import fs from 'fs';
import path from 'path';

const indent = (input, value) => {
  if (!input) return input;
  let space = '';
  for (let i = 0; i < value; i++) space += '  ';
  return input
    .split('\n')
    .map((line, index) => `${index ? space : ''}${line}`)
    .join('\n');
};

export const vue = (options) => {
  const name = 'vue';
  const next = (context) => {
    const visitors = {
      script: {
        ClassDeclaration(path) {
          path.traverse(visitors.script);

          // if (!path.node.body.body.length) return path.remove();

          // const properties = [];

          // const data = path.node.body.body.filter((element) => element.type === 'ObjectProperty');

          // if (data.length)
          //   properties.push(
          //     t.objectMethod(
          //       'method',
          //       t.identifier('data'),
          //       [],
          //       t.blockStatement([t.returnStatement(t.objectExpression(data))])
          //     )
          //   );

          // const methods = path.node.body.body.filter((element) => element.type === 'ObjectMethod');

          // if (methods.length) properties.push(t.objectProperty(t.identifier('methods'), t.objectExpression(methods)));

          // path.replaceWith(t.exportDefaultDeclaration(t.objectExpression(properties)));
        },
        ClassMethod(path) {
          const { key } = path.node;
          if (key.name === 'render') return path.remove();
          path.node.type = 'ObjectMethod';
        },
        ClassProperty(path) {
          // const { key, value } = path.node;
          // path.replaceWith(t.objectProperty(key, value));
        },
        ImportDeclaration(path) {
          // TODO
          // if (path.node.source.value != '@htmlplus/element') return;
          // path.remove();
        }
      },
      template: {
        ClassDeclaration(path) {
          path.traverse(visitors.template);
          path.replaceWithMultiple(path.node.body.body);
        },
        ClassMethod(path) {
          const { body } = path.node;

          const statement = body.body.find((element) => element.type === 'ReturnStatement');

          const element = statement.argument;

          const children = [];

          if (element.openingElement.name.name.match(/fragment/)) {
            children.push(
              t.jsxElement(
                t.jsxOpeningElement(t.jsxIdentifier('div'), []),
                t.jSXClosingElement(t.jsxIdentifier('div')),
                element.children || []
              )
            );
          } else {
            children.push(element);
          }

          path.replaceWithMultiple(children);
        },
        JSXAttribute(path) {
          const { name, value } = path.node;

          if (!value) return;

          if (name.name.match(/on[A-Z]/)) {
            name.name = '@' + camelCase(name.name.slice(2));
          }

          if (value.type !== 'JSXExpressionContainer') return;

          // TODO
          const code = print(value.expression.body || value.expression);

          // TODO
          const newValue = code.replace(/this\.|;/, '').replace('event', '$event');

          // TODO
          path.node.value = t.stringLiteral(newValue);

          if (!name.name.match(/@|:/)) name.name = `:${name.name}`;
        },
        JSXExpressionContainer(path) {
          // TODO
          const code = print(path.node.expression);

          // TODO
          path.replaceWithSourceString(`[[${code.replace('this.', '')}]]`);
        },
        JSXText(path) {
          const { value } = path.node;

          let level = -2;

          let parent = path.parentPath;

          while (parent && parent.type !== 'ClassBody') {
            level++;
            parent = parent.parentPath;
          }

          let space = '';

          for (let i = 0; i < level; i++) space += '  ';

          const trim = value.trim();

          const from = value.indexOf(trim);

          const to = trim.length;

          const startIndex = value.indexOf('\n');

          const endIndex = value.lastIndexOf('\n');

          const start = startIndex !== -1 && from > startIndex;

          const end = endIndex !== -1 && to <= endIndex;

          path.node.value = `${start ? '\n' : ''}${space}${value.trim()}${end ? '\n' : ''}`;
        }
      }
    };

    const script = (() => {
      const ast = t.cloneNode(context.fileAST, true);
      visitor(ast, visitors.script);
      return print(ast);
    })();

    const style = context.outputs
      ?.find((output) => output.name == 'prepare')
      ?.output?.find((snippet) => snippet.key == 'style');

    const template = (() => {
      const ast = t.cloneNode(
        t.file(
          t.program([t.classDeclaration(t.identifier('Test'), null, t.classBody([context.classRender]))], [], 'module')
        ),
        true
      );

      visitor(ast, visitors.template);

      let raw = print(ast).trim();

      return raw;
    })();

    const title = context.filePath
      .split(/[/|\\]/g)
      .slice(0, -1)
      .slice(-2)
      .map(capitalCase)
      .join(' | ');

    const patterns = ['templates/**/*.*'];

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    fs.rmSync(destination, { recursive: true, force: true });

    const config = {
      cwd: __dirname(import.meta.url)
    };

    const model = {
      title,
      script: indent(script, 1),
      template: indent(template, 1),
      style: indent(style?.content, 1)
    };

    renderTemplate(patterns, destination, config)(model);

    return {
      script,
      style: style?.content,
      template
    };
  };
  return {
    name,
    options,
    next
  };
};
