# React

To avoid [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) problems in React is recommended to use the dedicated package.

## Install

Install `HTMLPLUS` package into React application.

```shell
npm install @htmlplus/react
```

## Usage

Import the reference of components.

```jsx
import { Switch } from '@htmlplus/react';

const App = () => <Switch/>;

export default App;
```

## Properties

To set properties and attributes.

```jsx
import { Switch } from '@htmlplus/react';

const App = () => <Switch disabled/>;

export default App;
```

## Events

To handle event's callback.

```jsx
import { Switch } from '@htmlplus/react';

const App = () => <Switch onChange={() => alert('The switch toggled!')} />;

export default App;
```

## Pros

- Handles event's callbacks easily.
- Supports primitive and complex types.
- No need `plus-` prefix for the component's name.
- No need `plus-` prefix for the event's name.

## Cons

- Is used dedicated package.
