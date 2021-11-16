const
  Case = require('case'),
  fs = require('fs'),
  path = require('path'),
  modules = require('../modules'),
  plugins = require('../plugins'),
  root = path.resolve(__dirname);

module.exports = {
  title: 'Runner',
  task: async (context, task) => {

    const tasks = [];

    const caches = new Map();

    const outputs = [];

    for (const output of context.config.outputs) {

      const task = async (context, task) => {

        context.log = (message) => task.output = message;

        context.getTemplate = (template) => {

          const file = path.join(root, '..', 'modules', output.key, 'templates', template + '.hbs');

          const key = `${output.key}:template:${file}`;

          if (!caches.has(key)) {

            const value = plugins.template(file);

            caches.set(key, value);
          }

          return caches.get(key);
        }

        context.getPort = (component, example, id) => {

          const key = `port:${component.key}:${example.key}:${id}`;

          if (!caches.has(key)) {

            const value = plugins.port(example, id);

            caches.set(key, value);
          }

          return caches.get(key);
        }

        context.outputs = () => outputs;

        context.push = (data) => {

          data.module = output.key;

          outputs.push(data);
        }

        context.writeFile = (file, content) => {

          file = path.join(output.dist, file);

          const dir = path.dirname(file);

          !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });

          fs.writeFileSync(file, content);
        }

        try {
          await modules[output.key](context);
        }
        catch (error) {
          throw new Error(`Error on '${output.key}'. ${error}`)
        }
      }

      tasks.push({
        title: Case.capital(output.key),
        task
      })
    }

    return task.newListr(tasks);
  }
}