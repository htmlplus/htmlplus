# JavaScript

`{CONSTANTS.PLATFORM_NAME}` web components are fully compatible with JavaScript. To utilize web components in your JavaScript application follow these steps.

## Import

You can utilize `{CONSTANTS.PLATFORM_NAME}` simply by adding a simple scirpt in your main html like this.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{CONSTANTS.PLATFORM_NAME} in JavaScript</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="{CONSTANTS.PORT_JAVASCRIPT_PACKAGE_CDN}"></script>
  </head>
  <body>
    <plus-switch></plus-switch>
  </body>
</html>
```

<br/>

<Alert type="warning">
  JavaScript modules via script tag just work on modern browsers. It's not compatible with some browsers click [here](https://caniuse.com/es6-module) to check compatibility.
</Alert>

## Attributes

To set attribute.

```html
<plus-switch reverse></plus-switch>
```

## Properties

To set property. All Standard JavaScript APIs are supported. Feel free to use them.

```html
<plus-switch id="element"></plus-switch>
<script>
  element.reverse = true;
</script>
```

## Events

To add event to components you can use this format.

```html
<plus-switch id="element"></plus-switch>
<script>
  element.addEventListener('plus-change', () => {
    alert('The event fired!');
  })
</script>
```

<br/>

<Alert type="info">
  Most of events such as click and change, etc. are prereserved by explorers. To avoid conflict occuring you need to use `{CONSTANTS.PLATFORM_PREFIX}` prefix.
</Alert>
