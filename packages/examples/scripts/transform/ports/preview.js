const
    t = require('@babel/types'),
    template = require('@babel/template').default,
    utils = require('../../utils');

module.exports = ({ ast, generator }) => {

    const state = {
        react: new Set(),
        components: new Set()
    };

    const options = {
        AssignmentExpression(path) {

            const { left, right } = path.node;

            if (left && left.object && left.object.type === 'ThisExpression') {

                const setter = 'set' + utils.toPascalCase(left.property.name);

                path.replaceWith(template.ast`${setter}(${right})`);
            }
        },
        ClassDeclaration(path) {

            path.traverse(options);

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
                    export default App;
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

                const setter = 'set' + utils.toPascalCase(key.name);

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

            name.name = utils.toCamelCase(name.name);

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

            if (!name.match(/-/)) return;

            const newName = utils.toPascalCase(name);

            openingElement.name.name = newName;

            closingElement.name.name = newName;

            state.components.add(newName);
        }
    };

    return {
        script: generator(ast, options)
    }
};