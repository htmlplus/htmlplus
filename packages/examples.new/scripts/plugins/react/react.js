import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import t from '@babel/types';
import template from '@babel/template';
import { pascalCase } from 'change-case';

import path from 'path';

export const react = () => {
  const name = "react";
  const next = (context) => {

    // const state = {
    //   react: new Set(),
    //   components: new Set()
    // };

    visitor(
      context.fileAST,
      {
        AssignmentExpression(path) {
          const { left, right } = path.node;
          if (left && left.object && left.object.type === 'ThisExpression') {
            const setter = 'set' + pascalCase(left.property.name);
            path.replaceWith(template.expression.ast`${setter}(${right})`);
          }
        },
        // ClassDeclaration(path) {

        //   path.traverse(types.script);

        //   const body = template.ast`${path.node.body.body}`;

        //   const react = t.importDeclaration(
        //     [
        //       t.importDefaultSpecifier(
        //         t.identifier('React')
        //       ),
        //       ...Array.from(state.react.keys())
        //         .map((key) => t.importSpecifier(
        //           t.identifier(key),
        //           t.identifier(key)
        //         ))
        //     ],
        //     t.stringLiteral('react')
        //   );

        //   state.react.clear();

        //   const components = t.importDeclaration(
        //     [
        //       ...Array.from(state.components.keys())
        //         .map((key) => t.importSpecifier(
        //           t.identifier(key),
        //           t.identifier(key)
        //         ))
        //     ],
        //     t.stringLiteral(process.env.PORT_REACT_PACKAGE_NAME)
        //   );

        //   state.components.clear();

        //   path.replaceWithMultiple(template.ast`
        //         ${react}
        //         ${components}
        //         const App = () => {
        //         ${body}
        //         };
        //         export default App;
        //     `);
        // },
        // ClassMethod(path) {

        //   const { body, key, params } = path.node;

        //   if (key.name !== 'render') {

        //     path.replaceWith(template.ast`const ${key} = (${params}) => ${body}`);

        //     return;
        //   }

        //   const statement = body.body.find((element) => element.type === 'ReturnStatement');

        //   if (statement && statement.argument && statement.argument.type === 'JSXElement') {

        //     let element = statement.argument;

        //     let children = [t.jsxText('\n'), element, t.jsxText('\n')];

        //     if (element.openingElement.name.name.match(/fragment/)) {

        //       children = element.children;

        //       element = element.children.find((element) => element.type === 'JSXElement');
        //     }

        //     statement.argument = t.jsxElement(
        //       t.jsxOpeningElement(
        //         t.jsxIdentifier(''),
        //         []
        //       ),
        //       t.jSXClosingElement(
        //         t.jsxIdentifier('')
        //       ),
        //       children
        //     );
        //   }

        //   path.replaceWith(template.ast`${body.body}`);
        // },
        // ClassProperty(path) {

        //   const { decorators, key, value } = path.node;

        //   let result;

        //   if (decorators && decorators[0] && decorators[0].expression.callee.name === 'State') {

        //     const setter = 'set' + Case.pascal(key.name);

        //     result = template.ast`const [${key}, ${setter}] = useState(${value})`;

        //     state.react.add('useState');
        //   }
        //   else {

        //     result = template.ast`let ${key} = ${value}`;
        //   }

        //   path.replaceWith(result);
        // },
        // MemberExpression(path) {

        //   const { property, object } = path.node;

        //   if (object.type === 'ThisExpression') {

        //     path.replaceWith(property);
        //   }
        // },
        // JSXAttribute(path) {

        //   const { name } = path.node;

        //   name.name = name.name.replace('onPlus', 'on');

        //   name.name = Case.camel(name.name);

        //   if (name.name === 'class') name.name = 'className';

        //   // TODO
        //   if (name.name === 'dataSrc') name.name = 'data-src';

        //   // TODO
        //   if (name.name === 'dataHidden') name.name = 'data-hidden';
        // },
        // JSXElement(path) {

        //   const { openingElement, closingElement } = path.node;

        //   if (!openingElement) return;

        //   const name = openingElement.name.name;

        //   const component = docs.components.find((component) => component.tag === name);

        //   if (!component) return;

        //   let newName = Case.pascal(component.main ? component.key : component.group);

        //   state.components.add(newName);

        //   if (!component.main) newName = `${newName}.${Case.pascal(component.key.replace(component.group, ''))}`;

        //   openingElement.name.name = newName;

        //   closingElement.name.name = newName;
        // },
        // JSXText(path) {

        //   const { value } = path.node;

        //   let level = 1;

        //   let parent = path.parentPath;

        //   while (parent.type !== 'ReturnStatement') {

        //     level++;

        //     parent = parent.parentPath;
        //   }

        //   let space = '';

        //   for (let i = 0; i < level; i++) space += '  ';

        //   const trim = value.trim();

        //   const from = value.indexOf(trim);

        //   const to = trim.length;

        //   const startIndex = value.indexOf('\n');

        //   const endIndex = value.lastIndexOf('\n');

        //   const start = startIndex !== -1 && from > startIndex;

        //   const end = endIndex !== -1 && to <= endIndex;

        //   path.node.value = `${start ? '\n' : ''}${space}${value.trim()}${end ? '\n' : ''}`;
        // }
      }
    )

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
