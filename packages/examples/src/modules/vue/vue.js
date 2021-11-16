module.exports = (context) => {

  for (const component of context.components) {

    for (const example of component.examples) {

      context.log(`Component '${component.title}' example '${example.title}'.`);

      const port = context.getPort(component, example, 'vue');

      const files = [
        {
          path: 'public/index.html',
          template: 'public/index.html',
          model: {
            title: `${component.title} - ${example.title} | ${process.env.PLATFORM_NAME}`,
          }
        },
        {
          path: 'src/App.vue',
          template: 'src/App.vue',
          model: port
        },
        {
          path: 'src/main.js',
          template: 'src/main.js',
          model: {
            prefix: process.env.PLATFORM_PREFIX,
          }
        },
        {
          path: 'package.json',
          template: 'package.json',
          model: {
            packageName: process.env.PORT_VUE_PACKAGE_NAME,
            version: process.env.PORT_VUE_PACKAGE_VERSION,
          }
        },
      ]

      for (const file of files) {

        const path = `${component.key}/${example.key}/${file.path}`;

        const content = context.getTemplate(file.template)(file.model);

        // TODO
        // context.writeFile(path, content);

        // TODO
        context.push({
          type: 'file',
          path: file.path,
          content,
          example, 
        })
      }
    }
  }
}