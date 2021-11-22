import { 
  createTransformer, 
  extract,
  load,
  parse,
  scss, 
} from './index';

const transformer = createTransformer(
    // cache.load(),
    load(),
    parse(),
    // validate(),
    extract(),
    // typescript(),
    scss({
      includePaths: ['./src/styles']
    }),
    // customElement({
    //   dev: true,
    //   prefix: 'plus',
    //   dist: './dist/components'
    // }),
    // docs({
    //   prefix: 'plus',
    //   dist: './dist/json/docs.json'
    // }), 
    // vscode({
    //   prefix: 'plus',
    //   dist: './dist/json/html.html-data.json'
    // }),
    // types({
    //   dist: './dist/types'
    // }),
    // write(),
    // cache.save(),
)

transformer.next('filename');