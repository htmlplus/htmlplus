# Global Config In Svelte

Sets a config for the `size` property of the `spinner` component.

```js
import App from './App.svelte';

// Setup the global config.
import { setConfig } from '@htmlplus/core/config.js';
setConfig({
  component: {
    'plus-spinner': {
      property: {
        size: 'lg',
      }
    }
  }
});

const app = new App({
  target: document.body
});

export default app;
```
