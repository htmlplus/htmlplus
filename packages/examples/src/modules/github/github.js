module.exports = (context) => {

  for (const component of context.components) {

    for (const example of component.examples) {

      // if (example.skip) continue;

      // const keys = Object.keys(example.outputs || {});

      // for (let k = 0; k < keys.length; k++) {

      //   const key = keys[k];

      //   const port = example.ports[key];

      //   port.links = port.links || [];

      //   port.links.push({
      //     key: 'github',
      //     value: `${process.env.SOCIAL_GITHUB_EXAMPLES}/${key}/${component.key}/${example.key}`
      //   });
      // }
    }
  }
}