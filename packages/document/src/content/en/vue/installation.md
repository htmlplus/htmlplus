# Vue

`{CONSTANTS.PLATFORM_NAME}` web components are fully [compatible](https://custom-elements-everywhere.com/#vue) with Vue framework.

## Install

Install `{CONSTANTS.PLATFORM_NAME}` package into Vue application.

```shell
npm install {CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}
```

## Update Vue Compiler Options

Tell Vue to ignore all custom element tags defined in the `{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}`. So, follow the instructions [here](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue).

```js
// The compiler options would be something like this.
compilerOptions: {
  isCustomElement: (tag) => tag.startsWith('{CONSTANTS.PLATFORM_PREFIX}-')
}
```

## Usage

Import the reference of components.

```html
<template>
  <plus-switch />
</template>

<script setup>
  import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';
</script>
```

<br/>

<Alert type="info">
All `{CONSTANTS.PLATFORM_NAME}` components are available as same as a local tag (div, video, etc.) in the vue project.
</Alert>

## Properties

To use set properties and attributes.

```html
<template>
  <plus-switch reverse/>
</template>

<script setup>
  import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';
</script>
```

## Events

To handle event's callback.

```html
<template>
  <plus-switch @plus-change="onChange" />
</template>

<script setup>
  import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

  function onChange() {
    alert('The switch toggled!')
  }
</script>
```
