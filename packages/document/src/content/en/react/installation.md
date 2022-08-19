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

To use set properteis and attributes.

### Primitive types

To use number, string, boolean, null, undefined, symbol and bigint types.

```jsx
import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

const App = () => <plus-switch reverse/>;

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
    ref.current.keyframes = [];
  }, []);

  return <plus-animation name="fade-in" iterations="Infinity" ref={ref} play></plus-animation>
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
    ref.current.addEventListener('plusChange', callback);
    return () => ref.current.removeEventListener('plusChange', callback);
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
