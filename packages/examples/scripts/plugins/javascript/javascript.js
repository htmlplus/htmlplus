import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { capitalCase } from 'change-case';
import fs from 'fs';

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

const indent = (input, value) => {
  if (!input) return input;
  let space = '';
  for (let i = 0; i < value; i++) space += '  ';
  return input
    .split('\n')
    .map((line, index) => `${index ? space : ''}${line}`)
    .join('\n');
};

export const javascript = (options) => {
  const name = 'javascript';
  const next = (context) => {
    const dependencies = new Set();

    const state = {
      elements: new Set()
    };

    const setId = (path) => {
      const element = path.find((element) => element.type === 'JSXElement');

      state.elements.add(element.node);

      const attributes = element.node.openingElement.attributes;

      if (attributes.some((attribute) => attribute.name.name === 'id')) return;

      attributes.unshift(t.jsxAttribute(t.jsxIdentifier('id'), t.stringLiteral(`element${state.elements.size}`)));
    };

    const visitors = {
      template: {
        ClassDeclaration(path) {
          const { body } = path.node;

          path.traverse(visitors.template);

          const render = body.body.slice(-1)[0];

          path.replaceWith(render);

          state.elements.clear();
        },
        ClassMethod(path) {
          const { body } = path.node;

          const statement = body.body.find((element) => element.type === 'ReturnStatement');

          const element = statement.argument;

          path.replaceWith(element);
        },
        JSXAttribute(path) {
          const { name, value } = path.node;

          if (!value) return;

          if (name.name.match(/on[A-Z]/)) {
            setId(path);
            path.remove();
          }
        },
        JSXElement(path) {
          const { openingElement } = path.node;

          const name = openingElement.name.name;

          if (!/-/g.test(name)) return;

          dependencies.add(options?.componentRefrence(name));
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

    const script = context.outputs
      ?.find((output) => output.name == 'prepare')
      ?.output?.find((snippet) => snippet.key == 'javascript:script');

    const style = context.outputs
      ?.find((output) => output.name == 'prepare')
      ?.output?.find((snippet) => snippet.key == 'style');

    const template = (() => {
      const dedicated = context.outputs
        ?.find((output) => output.name == 'prepare')
        ?.output?.find((snippet) => snippet.key == 'javascript:template');

      const ast = t.cloneNode(
        t.file(
          t.program([t.classDeclaration(t.identifier('Test'), null, t.classBody([context.classRender]))], [], 'module')
        ),
        true
      );

      visitor(ast, visitors.template);

      // TODO: related to add dependencies
      if (dedicated) return dedicated.content;

      let raw = print(ast).trim();

      if (raw.endsWith(';')) raw = raw.slice(0, -1);

      if (raw.indexOf('fragment') == -1) return raw;

      return raw
        .split('\n')
        .slice(1, -1)
        .map((line) => line.slice(2))
        .join('\n')
        .trim();
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
      dependencies: Array.from(dependencies).sort(),
      script: indent(script?.content, 3),
      style: indent(style?.content, 3),
      template: indent(template, 2)
    };

    renderTemplate(patterns, destination, config)(model);

    return {
      script: script?.content,
      style: style?.content,
      template
    };
  };
  return {
    name,
    next
  };
};
