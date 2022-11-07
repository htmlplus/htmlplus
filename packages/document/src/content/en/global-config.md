# Global Config

Defines the properties of components as global. For instance `placement` property of the `dialog` component has a `top` value as default. By global config can apply a value like `center` to all `dialog` components. Consider this config can be overridden by setting the value to each component.

## Signature

A simple template for defining a collection of configs.

```js
import { setConfig } from 'https://unpkg.com/@htmlplus/core/config/index.js';

setConfig({
  component: {
    'COMPONENT-A': {
      property: {
        'PROPERTY-1': 'VALUE'
      }
    },
    'COMPONENT-B': {
      property: {
        'PROPERTY-1': 'VALUE',
        'PROPERTY-2': 'VALUE'
      }
    }
  }
});
```

## Real Example

Sets a global config for the `size` property of `spinner` component.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Global Config</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <!-- Gets 'lg' value for the 'size' property from global config -->
    <plus-spinner></plus-spinner>

    <!-- Ignores the global config for the 'size' property -->
    <plus-spinner size="sm"></plus-spinner>

    <!-- Initializes the global config -->
    <script type="module">
      import { setConfig } from 'https://unpkg.com/@htmlplus/core/config.js';
      setConfig({
        component: {
          'plus-spinner': {
            property: {
              size: 'lg',
            }
          }
        }
      });
    </script>

    <!-- Loads components after initialize the global config -->
    <script type="module">
      import "https://unpkg.com/@htmlplus/core/spinner";
    </script>
  </body>
</html>
```
