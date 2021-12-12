import { defineConfig } from 'vite';
import * as plugins from '@htmlplus/compiler';

const { start, next, finish } = plugins.compiler(
  plugins.read(),
  plugins.parse(),
  plugins.validate(),
  plugins.extract({
    prefix: "plus",
  }),
  plugins.scss({
    includePaths: ["./src/styles"],
  }),
  plugins.attach({
    members: true,
    styles: true,
  }),
  plugins.uhtml(),
  plugins.print(),
  plugins.esbuild()
);

export default defineConfig({
  plugins: [
    // {
    //   name: "htmlplus",
    //   async buildStart() {
    //     await start();
    //   },
    //   async load(id) {

    //     if (!id.endsWith(".tsx")) return null;

    //     const { script } = await next(id);

    //     return script;
    //   },
    //   async buildEnd() {
    //     await finish();
    //   }
    // }
  ]
})