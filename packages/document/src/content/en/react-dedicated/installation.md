# React

To avoid [Web Components]({CONSTANTS.WEBCOMPONENT_REFERENCE}) problems in React is recommended to use the dedicated package.

## Install

Install `{CONSTANTS.PLATFORM_NAME}` package into React application.

```shell
npm install {CONSTANTS.PORT_REACT_PACKAGE_NAME}
```

## Usage

Import the reference of components.

```jsx
import { Switch } from '{CONSTANTS.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch/>;

export default App;
```

## Properties

To set properties and attributes.

```jsx
import { Switch } from '{CONSTANTS.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch disabled/>;

export default App;
```

## Events

To handle event's callback.

```jsx
import { Switch } from '{CONSTANTS.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch onChange={() => alert('The switch toggled!')} />;

export default App;
```

## Pros

- Handles event's callbacks easily.
- Supports primitive and complex types.
- No need `{CONSTANTS.PLATFORM_PREFIX}` prefix for the component's name.
- No need `{CONSTANTS.PLATFORM_PREFIX}` prefix for the event's name.

## Cons

- Is used dedicated package.
