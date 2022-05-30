import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import t from '@babel/types';
import template from '@babel/template';
import { pascalCase } from 'change-case';

import path from 'path';

export const react = () => {
  const name = "react";
  const next = (context) => {

    const state = {
      react: new Set(),
      components: new Set()
    };

    const script = {
      AssignmentExpression(path) {
        const { left, right } = path.node;
        if (left && left.object && left.object.type === 'ThisExpression') {
          const setter = 'set' + pascalCase(left.property.name);
          path.replaceWith(template.expression.ast`${setter}(${right})`);
        }
      },
      ClassDeclaration(path) {
        path.replaceWithMultiple(
          [
            t.variableDeclaration(
              'const',
              [
                t.variableDeclarator(
                  t.identifier('App'),
                  t.arrowFunctionExpression(
                    [],
                    t.blockStatement([])
                  )
                )
              ]
            ),
            t.exportDefaultDeclaration(
              t.identifier('App')
            )
          ]
        );
      },
    }

    visitor(context.fileAST, script)

    const source = 'templates/**/*.*'

    const destination = path.join(context.directoryPath, 'react')

    const config = {
      cwd: __dirname(import.meta.url)
    }

    const model = {
      script: print(context.fileAST)
    }

    renderTemplate(source, destination, config)(model);
  };
  return {
    name,
    next,
  };
};
