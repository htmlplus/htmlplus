const
  Case = require('case'),
  docs = require('@htmlplus/react/dist/json/docs.json'), // TODO
  babel = require('@babel/core'),
  template = require('@babel/template').default,
  t = require('@babel/types');

module.exports = (options) => {

  const { ast, generator } = options;

  const state = {
    react: new Set(),
    components: new Set()
  };

  const types = {
    script: {
      AssignmentExpression(path) {

        const { left, right } = path.node;

        if (left && left.object && left.object.type === 'ThisExpression') {

          const setter = 'set' + Case.pascal(left.property.name);

          path.replaceWith(template.ast`${setter}(${right})`);
        }
      },
      ClassDeclaration(path) {

        path.traverse(types.script);

        const body = template.ast`${path.node.body.body}`;

        const react = t.importDeclaration(
          [
            t.importDefaultSpecifier(
              t.identifier('React')
            ),
            ...Array.from(state.react.keys())
              .map((key) => t.importSpecifier(
                t.identifier(key),
                t.identifier(key)
              ))
          ],
          t.stringLiteral('react')
        );

        state.react.clear();

        const components = t.importDeclaration(
          [
            ...Array.from(state.components.keys())
              .map((key) => t.importSpecifier(
                t.identifier(key),
                t.identifier(key)
              ))
          ],
          t.stringLiteral(process.env.PORT_REACT_PACKAGE_NAME)
        );

        state.components.clear();

        path.replaceWithMultiple(template.ast`
          ${react}
          ${components}
          const App = () => {
          ${body}
          };
        `);
      },
      ClassMethod(path) {

        const { body, key, params } = path.node;

        if (key.name === 'render') {

          const children = [];

          const classes = ['preview'];

          const element = body.body[0].argument;

          if (element.openingElement.name.name === 'fragment') {

            const isDock = element.openingElement.attributes.find((attribute) => attribute.name.name);

            isDock && classes.push('dock');

            element.children.map((child) => children.push(child));
          }
          else {

            children.push(element);
          }

          body.body[0].argument = t.jsxElement(
            t.jsxOpeningElement(
              t.jsxIdentifier('div'),
              [
                t.jsxAttribute(
                  t.jsxIdentifier('class'),
                  t.stringLiteral(classes.join(' '))
                )
              ]
            ),
            t.jSXClosingElement(
              t.jsxIdentifier('div')
            ),
            children
          );

          path.replaceWithMultiple(template.ast`${body.body}`);
        }
        else {

          path.replaceWith(template.ast`const ${key} = (${params}) => ${body}`);
        }
      },
      ClassProperty(path) {

        const { decorators, key, value } = path.node;

        let result;

        if (decorators && decorators[0] && decorators[0].expression.callee.name === 'State') {

          const setter = 'set' + Case.pascal(key.name);

          result = template.ast`const [${key}, ${setter}] = useState(${value})`;

          state.react.add('useState');
        }
        else {

          result = template.ast`let ${key} = ${value}`;
        }

        path.replaceWith(result);
      },
      MemberExpression(path) {

        const { property, object } = path.node;

        if (object.type === 'ThisExpression') {

          path.replaceWith(property);
        }
      },
      JSXAttribute(path) {

        const { name } = path.node;

        name.name = name.name.replace('onPlus', 'on');

        name.name = Case.camel(name.name);

        if (name.name === 'class') name.name = 'className';

        // TODO
        if (name.name === 'dataSrc') name.name = 'data-src';

        // TODO
        if (name.name === 'dataHidden') name.name = 'data-hidden';
      },
      JSXElement(path) {

        const { openingElement, closingElement } = path.node;

        if (!openingElement) return;

        const name = openingElement.name.name;

        const component = docs.components.find((component) => component.tag === name);

        if (!component) return;

        let newName = Case.pascal(component.main ? component.key : component.group);

        state.components.add(newName);

        if (!component.main) newName = `${newName}.${Case.pascal(component.key.replace(component.group, ''))}`;

        openingElement.name.name = newName;

        closingElement.name.name = newName;
      }
    }
  };

  let script = generator(ast, types.script);

  script = babel.transform(script, { presets: ['@babel/preset-react'] }).code;

  return {
    script
  }
};