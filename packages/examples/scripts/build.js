require('dotenv').config();

const
    json = require('@htmlplus/react/dist/docs.json'),
    fs = require('fs'),
    path = require('path'),
    modules = require('./modules'),
    transform = require('./transform'),
    utils = require('./utils'),
    root = path.resolve(process.cwd());

const order = ['javascript', 'react', 'vue', 'angular', 'codesandbox', 'github', 'combine'];

const context = {
    examples: [],
    components: [],
    outputs: {},
    snapshots: {},
    config: {
        snapshot: './build/snapshot.json',
        outputs: [
            {
                type: 'combine',
                dist: './build/combine'
            },
            // {
            //     type: 'codesandbox'
            // },
            // {
            //     type: 'github'
            // },
            // {
            //     type: 'javascript',
            //     dist: './build/javascript'
            // },
            // {
            //     type: 'react',
            //     dist: './build/react'
            // },
            // {
            //     type: 'vue',
            //     dist: './build/vue'
            // },
            // {
            //     type: 'angular',
            //     dist: './build/angular'
            // },
        ]
    }
};

(async () => {

    // init outputs order
    context.config.outputs = context.config.outputs.sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type));

    try {

        // snapshot path
        const file = path.join(root, context.config.snapshot);

        // load snapshot 
        const content = fs.readFileSync(file);

        // snapshot content
        context.snapshots = JSON.parse(content);
    }
    catch { }

    json

        // filter
        .filter((component) => component.main)

        // init
        .map((component) => {

            component.outputs = {};

            context.components.push(component);

            component.examples.map((example) => {

                example.outputs = {};

                example.parent = component;

                example.codes.map((code) => {

                    if (code.key === 'template') {

                        example.script = `class{render(){return(${code.value})}}`;
                    }
                    else {

                        example[code.key] = code.value;
                    }
                });

                const snapshot = utils.compress({
                    key: example.key,
                    title: example.title,
                    codes: example.codes
                });

                const key = `${component.key}.${example.key}`;

                if (context.snapshots[key] === snapshot) example.skip = true;

                context.snapshots[key] = snapshot;

                context.examples.push(example);
            });
        });

    // TODO
    const count = (context.examples || []).filter((example) => !example.skip).length;

    // TODO
    console.log(`${count} example(s) found`);

    if (!count) return;

    // TODO
    (context.examples || [])
        .map((example) => {

            const result = transform(example.script);

            Object.keys(result).map((key) => example[key] = result[key]);
        });

    // TODO
    const outputs = context.config.outputs || [];

    // make output
    for (let i = 0; i < outputs.length; i++) {

        const output = outputs[i];

        console.log(`start '${output.type}' module`);

        await modules[output.type](context);

        console.log(`finish '${output.type}' module`);
    }

    // store
    context.config.outputs.map((output) => {

        if (!output.dist) return;

        const type = output.type;

        const dist = path.join(root, output.dist);

        [context, context.examples, context.components]
            .flat()
            .filter((item) => item)
            .map((item) => {

                if (!item.outputs) return;

                (item.outputs[type] || [])
                    .map((output) => {

                        if (!output || !output.path || !output.content) return;

                        const file = path.join(dist, output.path);

                        const dir = path.dirname(file);

                        !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });

                        fs.writeFileSync(file, output.content);
                    });
            });
    });

    // snapshot path
    const file = path.join(root, context.config.snapshot);

    // snapshot content
    const content = JSON.stringify(context.snapshots, null, 2);

    // save snapshot
    fs.writeFileSync(file, content);
})();