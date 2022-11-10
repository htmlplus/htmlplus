# Svelte

`HTMLPLUS` web components are fully [compatible](https://custom-elements-everywhere.com/#svelte) with Svelte framework.

## Install

Install `HTMLPLUS` package into Svelte application.

```shell
npm install @htmlplus/core
```

## Usage

Import the reference of components.

```html
<script>
  import '@htmlplus/core';
</script>

<plus-switch />
```

<br/>

<Alert type="info">
All `HTMLPLUS` components are available as same as a local tag (div, video, etc.) in the svelte project.
</Alert>

## Properties

To set properties and attributes.

```html
<script>
  import '@htmlplus/core';
</script>

<plus-switch disabled/>
```

## Events

To handle event's callback.

```html
<script>
  import '@htmlplus/core';

  function onChange() {
    alert('The switch toggled!')
  }
</script>

<plus-switch on:plus-change={onChange} />
```
