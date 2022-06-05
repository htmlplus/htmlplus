# Vue

`{Constants.PLATFORM_NAME}` web components are fully compatible with Vue framework. To utilize `{Constants.PLATFORM_NAME}` components in your Vue application, you can opt for one of these 4 ways. (Click each title to show more).

<br/>

<details>

<summary>
  Using <code>dedicated</code> library for <code>Vue 3.x.x</code> <small>(Recommanded)</small>
</summary>

1- Create Vue App

With an application built using the [@vue/cli](https://cli.vuejs.org/guide/creating-a-project.html) script the easiest way to include the component library.

2- Install

Installing `{Constants.PLATFORM_NAME}` package using node package manager.

```shell
npm install {Constants.PORT_VUE_PACKAGE_NAME}
```

3- Usage

All `{Constants.PLATFORM_NAME}` components are available as same as a local tag (div, video, etc.) in the vue project. Add below code in the vue's template section and see the result.

```html
<template>
  <plus-switch/>
  or
  <PlusSwitch/>
</template>

<script>
import { defineComponent } from 'vue';
import { PlusSwitch } from '{Constants.PORT_VUE_PACKAGE_NAME}';

export default defineComponent({
  components: {
    PlusSwitch
  }
})
</script>
```

4- Properties

You can use this example to set properteis and attributes to web components.

```html
<template>
  <plus-switch reverse/>
  or
  <plus-switch :reverse="true"/>
</template>

<script>
import { defineComponent } from 'vue';
import { PlusSwitch } from '{Constants.PORT_VUE_PACKAGE_NAME}';

export default defineComponent({
  components: {
    PlusSwitch
  }
})
</script>
```

5- Events

Events should be written in this format.

```html
<template>
  <plus-switch @change="change"/>
</template>

<script>
import { defineComponent } from 'vue';
import { PlusSwitch } from '{Constants.PORT_VUE_PACKAGE_NAME}';

export default defineComponent({
  components: {
    PlusSwitch
  },
  methods: {
    change: () => alert('The switch toggled!')
  }
})
</script>
```

</details>

<br/>

<details>

<summary>
  Using <code>Web Components</code> directly in <code>Vue 3.x.x</code>
</summary>

In this way we use [standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE}) directly, You can follow these steps.

1- Create Vue App

With an application built using the [@vue/cli](https://cli.vuejs.org/guide/creating-a-project.html) script the easiest way to include the component library.

2- Install

Installing `{Constants.PLATFORM_NAME}` package using node package manager.

```shell
npm install {Constants.PORT_JAVASCRIPT_PACKAGE_NAME}
```

3- Update `vue.config.js` file

Tell Vue to ignore all custom element tags defined in the `{Constants.PORT_JAVASCRIPT_PACKAGE_NAME}`. The `vue.config.js` would be something like this finally.

```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: (tag) => tag.startsWith('{Constants.PLATFORM_PREFIX}-')
        }
        return options
      })
  }
}
```

4- Usage

All `{Constants.PLATFORM_NAME}` components are available as same as a local tag (div, video, etc.) in the vue project. Add below code in the vue's template section and see the result.

```html
<template>
  <plus-switch/>
</template>
```

5- Properties

You can use this example to set properteis and attributes to web components.

```html
<template>
  <plus-switch reverse/>
  or
  <plus-switch :reverse="true"/>
</template>
```

6- Events

Events should be written in this format.

```html
<template>
  <plus-switch @plus-change="change"/>
</template>

<script>
export default {
  methods: {
    change: () => alert('The switch toggled!')
  }
}
</script>
```

</details>

<br/>

<details>

<summary>
  Using <code>dedicated</code> library for <code>Vue 2.x.x</code>
</summary>

Dedicated library for Vue 2.x.x is not supported.

</details>

<br/>

<details>

  <summary>
    Using <code>Web Components</code> directly in <code>Vue 2.x.x</code>
  </summary>

In this way we use [standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE}) directly, You can follow these steps.

1- Create Vue App

With an application built using the [@vue/cli](https://cli.vuejs.org/guide/creating-a-project.html) script the easiest way to include the component library.

2- Install

Installing `{Constants.PLATFORM_NAME}` package using node package manager.

```shell
npm install {Constants.PORT_JAVASCRIPT_PACKAGE_NAME}
```

3- Import

The `main.js` would be something like this finally. Add the given values based on the example in your `main.js` file.

```js
import Vue from 'vue';
import App from './App.vue';

// Tell Vue to ignore all custom element tags defined in the `{Constants.PORT_JAVASCRIPT_PACKAGE_NAME}`
Vue.config.ignoredElements = [/{Constants.PLATFORM_PREFIX}-\w*/];

new Vue({
  render: h => h(App)
}).$mount('#app');
```

4- Usage

All `{Constants.PLATFORM_NAME}` components are available as same as a local tag (div, video, etc.) in the vue project. Add below code in the vue's template section and see the result.

```html
<template>
  <plus-switch/>
</template>
```

5- Properties

You can use this example to set properteis and attributes to web components.

```html
<template>
  <plus-switch reverse/>
  or
  <plus-switch :reverse="true"/>
</template>
```

6- Events

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

</details>

<br/>

## Compare

What are the differences between the 4 ways ?

| Type                                                                   | Event Prefix | Support v-model |
| ---------------------------------------------------------------------- | ------------ | --------------- |
| Using `dedicated` library for `Vue 3.x.x` <small>(Recommanded)</small> | No           | Yes             |
| Using `Web Components` directly in `Vue 3.x.x`                         | Yes          | No              |
| Using `dedicated` library for `Vue 2.x.x`                              | N/A          | N/A             |
| Using `Web Components` directly in `Vue 2.x.x`                         | Yes          | No              |
