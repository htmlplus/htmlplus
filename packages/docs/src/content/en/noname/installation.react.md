# React

To use `{Constants.PLATFORM_NAME}` components in react projects you can opt for one of these two way:

- Using web components directly (Not recommanded)
- Using React library (Recommanded)

In the first way we use [standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE}) directly:

1- Install `{Constants.PLATFORM_NAME}` package using node package manager.
```shell
npm install {Constants.PORT_JAVASCRIPT_PACKAGE_NAME}
```

2- Bind the custom elements to the window object
```js
import { defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_LOADER}';

defineCustomElements();
```

Edge and IE11 polyfills

If you want your custom elements to be able to work on older browsers, you should add the
`applyPolyfills()` that surround the `defineCustomElements()` function.

```js
applyPolyfills().then(() => defineCustomElements());
```

The `index.js` would be something like this finally:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyPolyfills, defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_LOADER}';

applyPolyfills().then(() =>  defineCustomElements());

ReactDOM.render(<App/>, document.getElementById('root'));
```

3- Using in React components
```jsx
import React from 'react';

const App = () => <plus-switch/>;

export default App;
```

Setting prop values
```jsx
<plus-switch reverse/>
Or
<plus-switch reverse={true}/>
```

Events
```jsx
import React, { useEffect, useRef } from 'react';

const App = () => {

  const element = useRef(null);

  const callback = () => alert('The switch toggled!');

  useEffect(() => {

    element.current.addEventListener('plusChange', callback);

    return () => element.current.removeEventListener('plusChange', callback);

  }, []);

  return <plus-switch ref={element}/>
}

export default App;
```

To avoid [standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE}) having problem with non-scalar data we recommand that you use custom events. you can follow these steps.

1- Install `{Constants.PLATFORM_NAME}` package using node package manager.
```shell
npm install {Constants.PORT_REACT_PACKAGE_NAME}
```

2- Bind the custom elements to the window object
```js
import { defineCustomElements } from '{Constants.PORT_REACT_PACKAGE_LOADER}';

defineCustomElements();
```

Edge and IE11 polyfills

If you want your custom elements to be able to work on older browsers, you should add the
`applyPolyfills()` that surround the `defineCustomElements()` function.

```js
applyPolyfills().then(() => defineCustomElements());
```

The `index.js` would be something like this finally:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyPolyfills, defineCustomElements } from '{Constants.PORT_REACT_PACKAGE_LOADER}';

applyPolyfills().then(() =>  defineCustomElements());

ReactDOM.render(<App/>, document.getElementById('root'));
```

3- Using in React components
```jsx
import React from 'react';
import { PlusSwitch } from '{Constants.PORT_REACT_PACKAGE_NAME}';

const App = () => <PlusSwitch/>;

export default App;
```

Setting prop values
```jsx
<PlusSwitch reverse/>
Or
<PlusSwitch reverse={true}/>
```

Events
```jsx
<PlusSwitch onPlusChange={() => alert('The switch toggled!')} />
```
