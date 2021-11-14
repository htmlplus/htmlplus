const utils = require('../utils');

module.exports = (context) => {

    context.examples.map((example) => {

        if (example.skip) return;

        const port = example.ports.vue || {};

        const root = `${example.parent.key}/${example.key}`;

        const style = example.style;

        const script = port.script;

        const template = port.template;

        example.outputs.vue = [
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
                            '<div id="app"></div>'
                        ],
                        '</body>'
                    ],
                    '</html>'
                ])
            },
            {
                path: `${root}/src/main.js`,
                content: utils.render([
                    'import Vue from \'vue\';',
                    'import App from \'./App.vue\';',
                    `import { applyPolyfills, defineCustomElements } from \'${process.env.PORT_VUE_PACKAGE_LOADER}\';`,
                    '',
                    'Vue.config.productionTip = false;',
                    '',
                    `Vue.config.ignoredElements = [/${process.env.TAG_PREFIX}-\w*/];`,
                    '',
                    'applyPolyfills().then(() => defineCustomElements());',
                    '',
                    'new Vue({',
                    [
                        'render: h => h(App)'
                    ],
                    '}).$mount(\'#app\');'
                ])
            },
            {
                path: `${root}/src/App.vue`,
                content: utils.render([
                    '<template>',
                    template,
                    '</template>',
                    ...(!script ? [] : ([
                        '',
                        '<script>',
                        script,
                        '</script>'
                    ])),
                    ...(!style ? [] : ([
                        '',
                        '<style scoped>',
                        style,
                        '</style>'
                    ]))
                ])
            },
            {
                path: `${root}/package.json`,
                content: utils.render([
                    '{',
                    [
                        '"scripts": {',
                        [
                            '"serve": "vue-cli-service serve",',
                            '"build": "vue-cli-service build",',
                            '"lint": "vue-cli-service lint"'
                        ],
                        '},',
                        '"dependencies": {',
                        [
                            `"${process.env.PORT_VUE_PACKAGE_NAME}": "${process.env.PORT_VUE_PACKAGE_VERSION}",`,
                            '"@vue/cli-plugin-babel": "4.1.1",',
                            '"vue": "^2.6.11"'
                        ],
                        '},',
                        '"devDependencies": {',
                        [
                            '"@vue/cli-plugin-eslint": "4.1.1",',
                            '"@vue/cli-service": "4.1.1",',
                            '"babel-eslint": "^10.0.3",',
                            '"eslint": "^6.7.2",',
                            '"eslint-plugin-vue": "^6.0.1",',
                            '"vue-template-compiler": "^2.6.11"'
                        ],
                        '},',
                        '"eslintConfig": {',
                        [
                            '"root": true,',
                            '"env": {',
                            [
                                '"node": true'
                            ],
                            '},',
                            '"extends": [',
                            [
                                '"plugin:vue/essential",',
                                '"eslint:recommended"'
                            ],
                            '],',
                            '"rules": {},',
                            '"parserOptions": {',
                            [
                                '"parser": "babel-eslint"'
                            ],
                            '}',
                        ],
                        '},',
                        '"browserslist": [',
                        [
                            '"> 1%",',
                            '"last 2 versions",',
                            '"not ie <= 8"'
                        ],
                        ']',
                    ],
                    '}',
                ])
            }
        ];
    });
}