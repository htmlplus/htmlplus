# Global Config

Defines the properties of components as global. For instance `placement` property of the `dialog` component has a `top` value as default. By global config can apply a value like `center` to all `dialog` components. Consider this config can be overridden by setting the value to each component.

## Signature

A simple template for defining a collection of configs.

```js
import { setConfig } from '@htmlplus/core/config.js';

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

## Example

A real example of a definition.

```js
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
```

## Frameworks

Definition in each framework.

- [Angular](/angular/global-config)
- [Javascript](/javascript/global-config)
- [React Dedicated](/react-dedicated/global-config)
- [React (Not Recommended)](/react/global-config)
- [React (experimental)](/react@experimental/global-config)
- [Svelte](/svelte/global-config)
- [Vue](/vue/global-config)
