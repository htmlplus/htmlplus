# React

To use UI components based on [Web Components]({CONSTANTS.WEBCOMPONENT_REFERENCE}) in React applications, follow the below steps.

<br/>

<Alert type="warning">
  React is not fully compatible with [Web Components]({CONSTANTS.WEBCOMPONENT_REFERENCE}), check the compatibility [here]({CONSTANTS.WEBCOMPONENT_COMPATIBILITY}).
</Alert>

## Install

Install `{CONSTANTS.PLATFORM_NAME}` package into React application.

```shell
npm install {CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}
```

## Usage

Import the reference of components.

```jsx
import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

const App = () => <plus-switch/>;

export default App;
```

## Properties

To set properties and attributes.

### Primitive types

To use number, string, boolean, null, undefined, symbol and bigint types.

```jsx
import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

const App = () => <plus-switch disabled/>;

export default App;
```

### Complex types

To use object and array types.

```jsx
import { useEffect, useRef } from 'react';
import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.keyframes = [
      { offset: 0.00, opacity: '1' },
      { offset: 0.25, opacity: '0' },
      { offset: 0.50, opacity: '1' },
      { offset: 0.75, opacity: '0' },
      { offset: 1.00, opacity: '1' }
    ];
  }, []);

  return <plus-animation iterations="Infinity" ref={ref} play></plus-animation>
};

export default App;
```

## Events

To handle event's callback.

```jsx
import { useEffect, useRef } from 'react';
import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

const App = () => {
  const ref = useRef(null);

  const callback = () => alert('The switch toggled!');

  useEffect(() => {
    ref.current.addEventListener('plus-change', callback);
    return () => ref.current.removeEventListener('plus-change', callback);
  }, []);

  return <plus-switch ref={ref}/>
}

export default App;
```

## Pros

- Is used [Web Components]({CONSTANTS.WEBCOMPONENT_REFERENCE}) directly.

## Cons

- Handles event's callbacks difficult.
- Handles complex types difficult.
- `{CONSTANTS.PLATFORM_PREFIX}` prefix is required for the component's name.
- `{CONSTANTS.PLATFORM_PREFIX}` prefix is required for the event's name.
