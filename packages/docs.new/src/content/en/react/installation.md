# React

To utilize `{Constants.PLATFORM_NAME}` components in your React application, you can opt for one of these two ways. (Click each title to show more).

<br/>

<details>

  <summary>
    Using <code>React</code> library <small>(Recommanded)</small>
  </summary>

To avoid [standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE}) having problem with non-scalar data we recommand that you use custom events, You can follow these steps.

1- Create React App

With an application built using the [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) script the easiest way to include the component library

2- Install

Installing `{Constants.PLATFORM_NAME}` package using node package manager.

```shell
npm install {Constants.PORT_REACT_PACKAGE_NAME}
```

3- Usage

Finally you can easily use the web components in your application in this format.

```jsx
import React from 'react';
import { Switch } from '{Constants.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch/>;

export default App;
```

4- Properties

You can use this example to set properteis and attributes to web components.

```jsx
import React from 'react';
import { Switch } from '{Constants.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch reverse/>;

export default App;
```

5- Events

Events should be written in this format.

```jsx
import React from 'react';
import { Switch } from '{Constants.PORT_REACT_PACKAGE_NAME}';

const App = () => <Switch onChange={() => alert('The switch toggled!')} />;

export default App;
```

 </details>

 <br/>

<details>

  <summary>
    Using <code>Web Components</code> directly
  </summary>

In this way we use [standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE}) directly, You can follow these steps.

1- Create React App

With an application built using the [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) script the easiest way to include the component library.

2- Install

Installing `{Constants.PLATFORM_NAME}` package using node package manager.

```shell
npm install {Constants.PORT_REACT_PACKAGE_NAME}
```

3- Usage

Finally you can easily use the web components in your application in this format.

```jsx
import React from 'react';

const App = () => <plus-switch/>;

export default App;
```

4- Properties

You can use this example to set properteis and attributes to web components.

```jsx
import React from 'react';

const App = () => <plus-switch reverse/>;

export default App;
```

5- Events

Events should be written in this format.

```jsx
import React, { useEffect, useRef } from 'react';

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

</details>
