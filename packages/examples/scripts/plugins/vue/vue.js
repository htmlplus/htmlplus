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

          if (!path.node.body.body.length) return path.remove();

          const properties = [];

          const data = path.node.body.body.filter((element) => element.type === 'ObjectProperty');

          if (data.length)
            properties.push(
              t.objectMethod(
                'method',
                t.identifier('data'),
                [],
                t.blockStatement([t.returnStatement(t.objectExpression(data))])
              )
            );

          const methods = path.node.body.body.filter((element) => element.type === 'ObjectMethod');

          if (methods.length) properties.push(t.objectProperty(t.identifier('methods'), t.objectExpression(methods)));

          path.replaceWith(t.exportDefaultDeclaration(t.objectExpression(properties)));
        },
        ClassMethod(path) {
          const { key } = path.node;
          if (key.name === 'render') return path.remove();
          path.node.type = 'ObjectMethod';
        },
        ClassProperty(path) {
          const { key, value } = path.node;
          path.replaceWith(t.objectProperty(key, value));
        }
      },
      template: {
        ClassDeclaration(path) {
          path.traverse(visitors.template);
          path.replaceWith(path.node.body.body[0]);
        },
        ClassMethod(path) {
          const { body, key } = path.node;

          if (key.name !== 'render') return path.remove();

          const statement = body.body.find((element) => element.type === 'ReturnStatement');

          let element = statement.argument;

          let children = [t.jsxText('\n'), element, t.jsxText('\n')];

          while (element.openingElement.name.name.match(/fragment/)) {
            children = element.children;
            element = element.children.find((element) => element.type === 'JSXElement');
          }

          path.replaceWith(
            t.jsxElement(
              t.jsxOpeningElement(t.jsxIdentifier('div'), []),
              t.jSXClosingElement(t.jsxIdentifier('div')),
              children
            )
          );
        },
        ClassProperty(path) {
          path.remove();
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
        JSXElement(path) {
          const { openingElement, closingElement, children } = path.node;

          if (!openingElement) return;

          const name = openingElement.name.name;

          if (name === 'preview') {
            const child = children.find((child) => child.type === 'JSXElement');
            path.replaceWith(child);
          } else if (name === 'Host') {
            openingElement.name.name = 'div';
            closingElement.name.name = 'div';
          }
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

    const style = context.snippets.find((snippet) => snippet.key == 'style');

    const template = (() => {
      const ast = t.cloneNode(context.fileAST, true);

      visitor(ast, visitors.template);

      let raw = print(ast).trim(); // TODO .replace(/\[\[/g, '{{').replace(/\]\]/g, '}}');

      if (raw.endsWith(';')) raw = raw.slice(0, -1);

      return raw;
    })();

    const title = context.filePath
      .split(/[/|\\]/g)
      .slice(0, -1)
      .slice(-2)
      .map(capitalCase)
      .join(' | ');

    const patterns = ['templates/**/*.*'];

    const destination = options?.destination?.(context) || path.join(context.directoryPath, 'vue');

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
  };
  return {
    name,
    next
  };
};
