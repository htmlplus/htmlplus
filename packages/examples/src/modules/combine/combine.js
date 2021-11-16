module.exports = (context) => {

  for (const component of context.components) {

    for (const example of component.examples) {

      context.log(`Component '${component.title}' example '${example.title}'.`);

      const model = {
        key: example.key,
        script: context.getPort(component, example, 'preview').script,
        codesandboxes: context.outputs().filter((output) => output.type === 'link' && output.module === 'codesandbox' && output.example === example),
        ports: {
          javascript: context.getPort(component, example, 'javascript'),
          react: context.getPort(component, example, 'react'),
          vue: context.getPort(component, example, 'vue'),
        }
      }

      // TODO
      // delete model.ports.preview;

      const path = `${component.key}/${example.key}.js`;

      const content = context.getTemplate('component/example.js')(model);

      context.writeFile(path, content);
    }

    const model = {
      component
    }

    const path = `${component.key}/index.js`;

    const content = context.getTemplate('component/index.js')(model);

    context.writeFile(path, content);
  }

  const model = {
    components: context.components.filter((component) => component.main)
  };

  const path = 'index.js';

  const content = context.getTemplate('index.js')(model);

  context.writeFile(path, content);
}