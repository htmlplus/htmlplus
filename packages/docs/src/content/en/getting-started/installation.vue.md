# Vue

`{Constants.PLATFORM_NAME}` web components are fully compatible with Vue framework. To utilize web components in your vue application follow these steps.

## Install

Installing `{Constants.PLATFORM_NAME}` package using node package manager.

```shell
npm install {Constants.PORT_VUE_PACKAGE_NAME}
```

## Import

The `main.js` would be something like this finally. Add the given values based on the example in your `main.js` file.

```js
import Vue from 'vue';
import App from './App.vue';

// Import package
import { applyPolyfills, defineCustomElements } from '{Constants.PORT_VUE_PACKAGE_LOADER}';

// Tell Vue to ignore all custom element tags defined in the `{Constants.PORT_VUE_PACKAGE_NAME}`
Vue.config.ignoredElements = [/${Constants.PLATFORM_TAG_PREFIX}-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => defineCustomElements());

new Vue({
  render: h => h(App)
}).$mount('#app');
```

## Usage

All `{Constants.PLATFORM_NAME}` components are available as same as a local tag (div, video, etc.) in the vue project. Add below code in the vue's template section and see the result.

```html
<plus-switch/>
```

## Properties

To add properties, you can act based on this given example.

```html
<plus-switch reverse/>
or
<plus-switch :reverse="true"/>
```

## Events

Events should be written in this format.

```html
<template>
  <plus-switch @plusChange="change"/>
</template>

<script>
export default {
  methods: {
    change: () => alert('The switch toggled!')
  }
}
</script>
```
