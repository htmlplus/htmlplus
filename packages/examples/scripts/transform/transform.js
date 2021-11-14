const
    generate = require('@babel/generator').default,
    parser = require('@babel/parser'),
    traverse = require('@babel/traverse').default,
    ports = require('./ports');

module.exports = (script) => {

    const result = {};

    const code = (script || '').replace('class', 'class Name');

    result.ports = {};

    Object.keys(ports)
        .map((type) => {

            const ast = parser.parse(
                code,
                {
                    sourceType: 'module',
                    plugins: [
                        'jsx',
                        'typescript',
                        'classProperties',
                        'decorators-legacy'
                    ]
                }
            )

            const generator = (ast, options) => {

                traverse(ast, options);

                return generate(
                    ast,
                    {
                        jsescOption: {
                            // quotes: 'single'
                        }
                    }
                ).code
            }

            result.ports[type] = ports[type]({ ast, generator })
        });

    return result;
}