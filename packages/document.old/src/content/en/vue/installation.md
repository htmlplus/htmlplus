# Vue

`HTMLPLUS` web components are fully [compatible](https://custom-elements-everywhere.com/#vue) with Vue framework.

## Install

Install `HTMLPLUS` package into Vue application.

```shell
npm install @htmlplus/core
```

## Update Vue Compiler Options

Tell Vue to ignore all custom element tags defined in the `@htmlplus/core`. So, follow the instructions [here](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue).

The compiler options would be something like this:

```js
compilerOptions: {
  isCustomElement: (tag) => tag.startsWith('plus-')
}
```

## Usage

Import the reference of components.

```html
<template>
  <plus-switch />
</template>

<script setup>
  import '@htmlplus/core';
</script>
```

<br/>

<Alert type="info">
All `HTMLPLUS` components are available as same as a local tag (div, video, etc.) in the vue project.
</Alert>

## Properties

To set properties and attributes.

### Primitive types

To use number, string, boolean, null, undefined, symbol and bigint types.

```html
<template>
  <plus-switch disabled/>
</template>

<script setup>
  import '@htmlplus/core';
</script>
```

### Complex types

To use object and array types.

```html
<template>
  <plus-animation iterations="Infinity" :keyframes.prop="keyframes" play></plus-animation>
</template>

<script setup>
  import '@htmlplus/core';

  const keyframes = [
    { offset: 0.00, opacity: '1' },
    { offset: 0.25, opacity: '0' },
    { offset: 0.50, opacity: '1' },
    { offset: 0.75, opacity: '0' },
    { offset: 1.00, opacity: '1' }
  ];
</script>
```

## Events

To handle event's callback.

```html
<template>
  <plus-switch @plus-change="onChange" />
</template>

<script setup>
  import '@htmlplus/core';

  function onChange() {
    alert('The switch toggled!')
  }
</script>
```
