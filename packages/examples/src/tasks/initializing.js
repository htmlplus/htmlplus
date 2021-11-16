const
  docs = require('@htmlplus/react/dist/json/docs.json'),
  config = require('../../config');

module.exports = {
  title: 'Initializing',
  task: (context) => {

    const components = JSON.parse(JSON.stringify(docs.components));

    context.components = components;

    context.examples = components.map((component) => component.examples).flat(1);

    context.config = config;
  }
}