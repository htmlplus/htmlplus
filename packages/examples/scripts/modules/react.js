const utils = require('../utils');

module.exports = (context) => {

    context.examples.map((example) => {

        if (example.skip) return;

        const port = example.ports.react || {};

        const root = `${example.parent.key}/${example.key}`;

        const style = example.style;

        const script = port.script;

        example.outputs.react = [
            {
                path: `${root}/public/index.html`,
                content: utils.render([
                    '<!DOCTYPE html>',
                    '<html>',
                    [
                        '<head>',
                        [
                            `<title>${example.title} ${example.parent.key} | ${process.env.PLATFORM_ABBREVIATION}</title>`,
                            '<meta charset="utf-8">',
                            '<meta name="viewport" content="width=device-width, initial-scale=1">'
                        ],
                        '</head>',
                        '<body>',
                        [
                            '<div id="root"></div>'
                        ],
                        '</body>'
                    ],
                    '</html>'
                ])
            },
            {
                path: `${root}/src/index.css`,
                content: style
            },
            {
                path: `${root}/src/index.js`,
                content: utils.render([
                    'import React from \'react\';',
                    'import ReactDOM from \'react-dom\';',
                    `import { applyPolyfills, defineCustomElements } from \'${process.env.PORT_REACT_PACKAGE_LOADER}\';`,
                    style ? 'import \'./index.css\';' : undefined,
                    'import App from \'./App\';',
                    '',
                    'applyPolyfills().then(() => defineCustomElements());',
                    '',
                    'ReactDOM.render(',
                    [
                        '<React.StrictMode>',
                        [
                            '<App />',
                        ],
                        '</React.StrictMode>,',
                        'document.getElementById(\'root\')'
                    ],
                    ');'
                ])
            },
            {
                path: `${root}/src/App.js`,
                content: script
            },
            {
                path: `${root}/package.json`,
                content: utils.render([
                    '{',
                    [
                        '"dependencies": {',
                        [
                            `"${process.env.PORT_REACT_PACKAGE_NAME}": "${process.env.PORT_REACT_PACKAGE_VERSION}",`,
                            '"react": "16.13.1",',
                            '"react-dom": "16.13.1",',
                            '"react-scripts": "3.4.3"',
                        ],
                        '},',
                        '"scripts": {',
                        [
                            '"start": "react-scripts start"'
                        ],
                        '},',
                        '"browserslist": {',
                        [
                            '"production": [',
                            [
                                '">0.2%",',
                                '"not dead",',
                                '"not op_mini all"',
                            ],
                            '],',
                            '"development": [',
                            [
                                '"last 1 chrome version",',
                                '"last 1 firefox version",',
                                '"last 1 safari version"',
                            ],
                            ']',
                        ],
                        '}',
                    ],
                    '}',
                ])
            }
        ];
    });
}