require('dotenv').config();

const
  Listr = require('listr2').Listr,
  tasks = require('./tasks');

new Listr(
  [
    tasks.initializing,
    tasks.runner,
  ],
  {
    concurrent: false,
    rendererOptions: {
      collapse: false
    }
  }
)
  .run({})
  .catch(console.error);