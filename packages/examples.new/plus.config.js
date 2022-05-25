import { extract, parse, read } from "@htmlplus/element/compiler/index.js";
import { react } from "./scripts/build.react.js";

// ```css [style]
// ```

// ```html [template]
// ```

// ```tsx [script]
// class { }
// ```

// ```html [javascript:template]
// ```

// ```js [javascript:script]
// ```

// ```html [vue:template]
// ```

// ```js [vue:script]
// ```

export default [
  read(),
  {
    name: "prepare",
    next(context) {
      context.fileContent = `
        @Element()
        class Test {
          render() {
            return (
              <> 
              </>
            );
          }
        }
      `;
    },
  },
  parse(),
  extract({
    prefix: "plus",
  }),
  react(),
];
