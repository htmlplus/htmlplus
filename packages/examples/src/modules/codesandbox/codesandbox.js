const
  csb = require('codesandboxer'),
  utils = require('../../utils');

module.exports = async (context) => {

  for (const component of context.components) {

    for (const example of component.examples) {

      const ports = context
        .outputs()
        .filter((output) => output.type === 'file' && output.example === example)
        .reduce((result, item) => {

          const key = 'module';

          (result[item[key]] = result[item[key]] || []).push(item);

          return result;
        }, {});

      for (const key in ports) {

        const port = ports[key];

        const files = {};

        for (const file of port) {

          // TODO
          const path = key === 'javascript' ? 'index.html' : file.path;
          
          files[path] = {
            content: file.content.replace(/src="\//, 'src="https://htmlplus.io/') // TODO
          }
        }

        const parameters = utils.compressor({ files });

        const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

        // TODO
        // const info = await csb.sendFilesToCSB(parameters);

        // TODO
        // const url = info.sandboxUrl.split('?').shift();

        // TODO
        context.push({
          type: 'link',
          url,
          port: key,
          example,
        })
      }
    }
  }
}