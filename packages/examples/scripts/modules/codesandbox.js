const
    csb = require('codesandboxer'),
    utils = require('../utils');

module.exports = async (context) => {

    const files = {};

    for (let i = 0; i < context.examples.length; i++) {

        const example = context.examples[i];

        if (example.skip) continue;

        const keys = Object.keys(example.outputs || {});

        for (let j = 0; j < keys.length; j++) {

            const key = keys[j];

            const output = example.outputs[key];

            output.map((file) => {

                path = file.path.split(example.key).pop().slice(1);

                files[path] = {
                    content: file.content
                }
            })

            const parameters = utils.compress({ files });

            const info = await csb.sendFilesToCSB(parameters);

            const url = info.sandboxUrl.split('?').shift();

            const port = example.ports[key];

            port.links = port.links || [];

            port.links.push({
                key: 'codesandbox',
                value: url
            });
        }
    }
}