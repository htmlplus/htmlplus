import { createTransformer } from './transformer';
import { docs, extract, parse, read, scss, typescript } from './modules';

const transformer = createTransformer(
    // cache.load(),
    read(),
    parse(),
    // validate(),
    extract({
      prefix: 'plus',
    }),
    typescript(),
    // scss({
    //   includePaths: ['./src/styles']
    // }),
    // customElement({
    //   dev: true,
    //   prefix: 'plus',
    //   dist: './dist/components'
    // }),
    docs({
      prefix: 'plus',
      dist: './dist/json/docs.json'
    }), 
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

transformer.next('C:\\Users\\Samar\\Desktop\\dev\\packages\\core.new\\src\\components\\aspect-ratio\\aspect-ratio.tsx');