# Global Config In Javascript

Sets a config for the `size` property of the `spinner` component.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Global Config Example</title>
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
