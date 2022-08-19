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
import React from 'react';
import { Switch } from '{CONSTANTS.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch/>;

export default App;
```

## Properties

To use set properteis and attributes.

```jsx
import React from 'react';
import { Switch } from '{CONSTANTS.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch reverse/>;

export default App;
```

## Events

To handle event's callback.

```jsx
import React from 'react';
import { Switch } from '{CONSTANTS.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch onChange={() => alert('The switch toggled!')} />;

export default App;
```

## Pros

## Cons
