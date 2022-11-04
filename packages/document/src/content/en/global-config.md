# Global Config

```js
import { setConfig } from 'https://unpkg.com/@htmlplus/core/config/index.js';
setConfig({
  component: {
    ['COMPONENT']: {
      property: {
        ['PROPERTY']: 'VALUE'
      }
    }
  }
});
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Global Config</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module">
      import { setConfig } from 'https://unpkg.com/@htmlplus/core/config/index.js';
      setConfig({
        component: {
          switch: {
            property: {
              checked: true
            }
          }
        }
      });
    </script>
  </head>
  <body>
    <plus-switch></plus-switch>
    <script type="module">
      import "https://unpkg.com/@htmlplus/core";
    </script>
  </body>
</html>
```
