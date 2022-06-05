# JavaScript

`{Constants.PLATFORM_NAME}` web components are fully compatible with JavaScript. To utilize web components in your JavaScript application follow these steps.

## Import

You can utilize `{Constants.PLATFORM_NAME}` simply by adding a simple scirpt in your main html like this.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{Constants.PLATFORM_NAME} in JavaScript</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="{Constants.PORT_JAVASCRIPT_PACKAGE_CDN}"></script>
  </head>
  <body>
    <plus-switch></plus-switch>
  </body>
</html>
```

<br/>

<Alert type="warning">
  type="module" just works on the modern browsers. it's not compatible with "IE 11" or "Edge 12-18".
</Alert>

## Properties

You can use these two examples to set properteis and attributes to web components.

```html
<plus-switch reverse></plus-switch>
or
<plus-switch reverse="true"></plus-switch>
```

All Standard JavaScript APIs are supported. Feel free to use them.

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
  element.addEventListener('plusChange', () => {
    alert('plusChange event fired!');
  })
</script>
```

<br/>

<Alert type="info">
  Most of events such as click and change, etc. are prereserved by explorers. To avoid conflict occuring you need to use "{Constants.PLATFORM_PREFIX}" prefix.
</Alert>
