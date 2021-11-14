# React

 To utilize `{Constants.PLATFORM_NAME}` web components in your React application follow these steps.
## Install

Installing `{Constants.PLATFORM_NAME}` package using node package manager.

```shell
npm install {Constants.PORT_REACT_PACKAGE_NAME}
```

## Import

The `index.js` would be something like this finally.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import package
import { applyPolyfills, defineCustomElements } from '{Constants.PORT_REACT_PACKAGE_LOADER}';

// Bind the custom elements to the window object
applyPolyfills().then(() =>  defineCustomElements());

ReactDOM.render(<App/>, document.getElementById('root'));
```

## Usage

Finally you can easily use the web components in your application in this format.

```jsx
import React from 'react';
import { PlusSwitch } from '{Constants.PORT_REACT_PACKAGE_NAME}';

const App = () => <PlusSwitch/>;

export default App;
```

## Properties

You can use these two examples to set properteis and attributes to web components.

```jsx
<PlusSwitch reverse/>
Or
<PlusSwitch reverse={true}/>
```

## Events
Events should be written in this format.

```jsx
<PlusSwitch onPlusChange={() => alert('The switch toggled!')} />
```
