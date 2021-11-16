module.exports = (context) => {

  for (const component of context.components) {

    for (const example of component.examples) {

      context.log(`Component '${component.title}' example '${example.title}'.`);

      const port = context.getPort(component, example, 'react');

      const files = [
        {
          path: 'public/index.html',
          template: 'public/index.html',
          model: {
            title: `${component.title} - ${example.title} | ${process.env.PLATFORM_NAME}`,
          }
        },
        {
          path: 'src/App.js',
          template: 'src/App.js',
          model: {
            script: port.script
          }
        },
        {
          path: 'src/index.css',
          template: 'src/index.css',
          skip: !port.style,
          model: {
            style: port.style
          }
        },
        {
          path: 'src/index.js',
          template: 'src/index.js',
          model: {
            hasStyle: !!port.style
          }
        },
        {
          path: 'package.json',
          template: 'package.json',
          model: {
            packageName: process.env.PORT_REACT_PACKAGE_NAME,
            version: process.env.PORT_REACT_PACKAGE_VERSION,
          }
        },
      ]

      for (const file of files) {

        if (file.skip) continue;

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