const utils = require('../utils');

module.exports = (context) => {

    context.examples.map((example) => {

        if (example.skip) return;

        const port = example.ports.javascript || {};

        const root = `${example.parent.key}/${example.key}`;

        const style = !example.style ? [] : [
            '<style>',
            [
                utils.indent(example.style || '', 3)
            ],
            '</style>'
        ];

        const script = !port.script ? [] : [
            '<script>',
            [
                utils.indent(port.script, 3)
            ],
            '</script>'
        ];

        const template = !port.template ? [] : [utils.indent(port.template, 2)];

        const result = utils.render([
            '<html>',
            [
                '<head>',
                [
                    `<title>${example.title} ${example.parent.key} | ${process.env.PLATFORM_ABBREVIATION}</title>`,
                    '<meta charset="utf-8">',
                    '<meta name="viewport" content="width=device-width, initial-scale=1">',
                    // TODO
                    // `<script src="${process.env.PORT_JAVASCRIPT_PACKAGE_CDN}"></script>`,
                    '<script type="module">',
                    [
                        `import { defineCustomElements } from \'${process.env.PORT_JAVASCRIPT_PACKAGE_CDN_LOADER}\';`,
                        'defineCustomElements();'
                    ],
                    '</script>',
                    ...style
                ],
                '</head>',
                '<body>',
                [
                    ...template,
                    ...script
                ],
                '</body>',
            ],
            '</html>',
        ]);

        example.outputs.javascript = [{
            path: `${root}.html`,
            content: result
        }];
    });
}