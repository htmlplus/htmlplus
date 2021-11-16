const
  fs = require('fs'),
  Handlebars = require('handlebars');

Handlebars.registerHelper('json', JSON.stringify);

Handlebars.registerHelper('indent', (input, value) => {

  if (!input) return input;

  let space = '';

  for (let i = 0; i < value; i++) space += '  ';

  return input.split('\n').map((line, index) => `${index ? space : ''}${line}`).join('\n');
});

module.exports = (file) => {

  const content = fs.readFileSync(file, { encoding: 'utf8' });

  return Handlebars.compile(content);
}