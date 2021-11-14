module.exports = async (context) => {

    for (let i = 0; i < context.components.length; i++) {

        const component = context.components[i];

        for (let j = 0; j < component.examples.length; j++) {

            const example = component.examples[j];

            if (example.skip) continue;

            const keys = Object.keys(example.outputs || {});

            for (let k = 0; k < keys.length; k++) {

                const key = keys[k];

                const port = example.ports[key];

                port.links = port.links || [];

                port.links.push({
                    key: 'github',
                    value: `${process.env.SOCIAL_GITHUB_EXAMPLES}/${key}/${component.key}/${example.key}`
                });
            }
        }
    }
}