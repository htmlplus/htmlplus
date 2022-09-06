# Svelte

`{CONSTANTS.PLATFORM_NAME}` web components are fully [compatible](https://custom-elements-everywhere.com/#svelte) with Svelte framework.

## Install

Install `{CONSTANTS.PLATFORM_NAME}` package into Svelte application.

```shell
npm install {CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}
```

## Usage

Import the reference of components.

```html
<script>
  import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';
</script>

<plus-switch />
```

<br/>

<Alert type="info">
All `{CONSTANTS.PLATFORM_NAME}` components are available as same as a local tag (div, video, etc.) in the svelte project.
</Alert>

## Properties

To set properties and attributes.

```html
<script>
  import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';
</script>

<plus-switch disabled/>
```

## Events

To handle event's callback.

```html
<script>
  import '{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_NAME}';

  function onChange() {
    alert('The switch toggled!')
  }
</script>

<plus-switch on:plus-change={onChange} />
```
