module.exports = (context) => {

  for (const component of context.components) {

    for (const example of component.examples) {

      context.log(`Component '${component.title}' example '${example.title}'.`);

      const model = {
        title: `${component.title} - ${example.title} | ${process.env.PLATFORM_NAME}`,
        reference: process.env.PORT_JAVASCRIPT_PACKAGE_CDN,
        ...context.getPort(component, example, 'javascript'),
      }

      const path = `${component.key}/${example.key}.html`;

      const content = context.getTemplate('example.html')(model);

      // TODO
      // context.writeFile(path, content);

      // TODO
      context.push({
        type: 'file',
        path,
        content,
        example, 
      })
    }
  }
}