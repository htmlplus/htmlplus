const
    babel = require('@babel/core'),
    utils = require('../utils');

module.exports = (context) => {

    context.components.map((component) => {

        component.examples.map((example) => {

            if (example.skip) return;

            const port = example.ports.preview || {};

            const root = `${example.parent.key}/${example.key}`;

            let script = port.script;

            script = babel.transform(
                script,
                {
                    presets: [
                        // TODO '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                }
            ).code;

            const docs = {
                key: example.key,
                //TODO
                links: example.links,
                ports: JSON.parse(JSON.stringify(example.ports))
            };

            docs.ports.preview.script = 'App';

            const json = JSON.stringify(docs, null, 2).replace(/"App"/, 'App');

            script = script.replace('App;', `${json}`);

            example.outputs.combine = [
                {
                    path: `${root}.js`,
                    content: script
                }
            ];
        });

        component.outputs.combine = [
            {
                path: `${component.key}/index.js`,
                content: utils.render([
                    `export default {`,
                    [
                        `key: '${component.key}',`,
                        'examples: [',
                        component.examples.map((example) => `require('./${example.key}').default,`),
                        ']'
                    ],
                    '}'
                ])
            }
        ];
    });

    context.outputs.combine = [
        {
            path: `index.js`,
            content: utils.render([
                `export default [`,
                context.components.map((component) => `require('./${component.key}').default,`),
                ']'
            ])
        }
    ];
}