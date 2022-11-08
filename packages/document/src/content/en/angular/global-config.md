# Global Config In Angular

Sets a config for the `size` property of the `spinner` component.

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

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

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error) => console.error(error));
```
