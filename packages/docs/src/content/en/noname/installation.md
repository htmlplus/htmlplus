## JavaScript
```html
<html>
  <head>
    <script src="{Constants.PORT_JAVASCRIPT_PACKAGE_CDN}"></script>
  </head>
  <body>
    <plus-switch></plus-switch>
  </body>
</html>
```

## React
1- Install `{Constants.PLATFORM_NAME}` package using node package manager.
```shell
npm install {Constants.PORT_REACT_PACKAGE_NAME}
```
2- The `index.js` would be something like this finally:
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

## Vue
1- Installing `{Constants.PLATFORM_NAME}` package using node package manager.
```shell
npm install {Constants.PORT_VUE_PACKAGE_NAME}
```
2- The `main.js` would be something like this finally:
```js
import Vue from 'vue';
import App from './App.vue';
import { applyPolyfills, defineCustomElements } from '${Constants.PORT_VUE_PACKAGE_LOADER}';

Vue.config.ignoredElements = [/${Constants.PLATFORM_TAG_PREFIX}-\w*/];

applyPolyfills().then(() => defineCustomElements());

new Vue({
  render: h => h(App)
}).$mount('#app');
```
3- Using in Vue components
```html
<template>
  <plus-switch/>
</template>
```
## Angular
1- Installing `{Constants.PLATFORM_NAME}` package using node
```html
npm install {Constants.PORT_ANGULAR_PACKAGE_NAME}
```