import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { capitalCase } from 'change-case';
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

    const dependencies = context.customElementNames?.map((name) => options?.componentRefrence(name));

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    const patterns = ['templates/**/*.*'];

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
        }
      }
    };

    const script = (() => {
      const dedicated = getSnippet(context, 'javascript:script');

      if (dedicated) return dedicated.content;

      const ast = t.cloneNode(context.fileAST, true);

      visitor(ast, visitors.script);

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
      const dedicated = getSnippet(context, 'javascript:template');

      if (dedicated) return dedicated.content;

      const ast = t.cloneNode(toFile(context.classRender), true);

      visitor(ast, visitors.template);

      const content = print(ast)?.trim();

      if (!content) return;

      return format(content, { parser: 'html' });
    })();

    const model = {
      dependencies,
      script,
      style,
      template,
      title
    };

    renderTemplate(patterns, destination, config)(model);

    formatFile(path.join(destination, 'index.html'), { parser: 'html' });

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
