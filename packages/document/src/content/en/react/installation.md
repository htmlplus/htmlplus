# React

To utilize UI components based on [Standard HTML Custom Elements]({CONSTANTS.WEBCOMPONENT_REFERENCE}) in React applications, follow the below steps.

<Alert type="warning">
  React is not fully compatible with custom elements, check the compatibility [here]({CONSTANTS.WEBCOMPONENT_COMPATIBILITY}).
</Alert>

## Create React App

With an application built using the [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) script the easiest way to include the component library.

## Install

Installing `{CONSTANTS.PLATFORM_NAME}` package using node package manager.

```shell
npm install {CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}
```

## Usage

Finally you can easily use the web components in your application in this format.

```jsx
import React from 'react';
import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

const App = () => <plus-switch/>;

export default App;
```

## Properties

You can use this example to set properteis and attributes to web components.

```jsx
import React from 'react';
import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

const App = () => <plus-switch reverse/>;

export default App;
```

## Events

Events should be written in this format.

```jsx
import { useEffect, useRef } from 'react';
import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

const App = () => {
  const switchRef = useRef(null);

  const callback = () => alert('The switch toggled!');

  useEffect(() => {
    switchRef.current.addEventListener('plusChange', callback);
    return () => switchRef.current.removeEventListener('plusChange', callback);
  }, []);

  return <plus-switch ref={switchRef}/>
}

export default App;
```
