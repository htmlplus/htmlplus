# JavaScript















You can utilize **{Constants.PLATFORM_NAME}** simply by adding a simple scirpt in your main html like this:
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
If you prefer to use ES modules you can import components.

> [warning]Pay attention that type="module" just works in the modern browser and it's not compatible with IE11 or Edge 12-18.

```html
<html>
  <head>
    <script type="module">
      import { defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_CDN_LOADER}';
      defineCustomElements();
    </script>
  </head>
  <body>
    <plus-switch></plus-switch>
  </body>
</html>
```
Setting Attributes on components.

```html
<plus-switch reverse></plus-switch>
Or
<plus-switch reverse="true"></plus-switch>
```
You can change the components attributes by using JAVASCIRPTS APIs.

```html
<plus-switch id="element"></plus-switch>
<script>
  element.reverse = true;
</script>
```
Changing the event of a component is something like this.
> [info] You need to use hp prefix in order to avoid conflict occuring because most of events such as click and change, etc are prereserved by explorers.
```html
<plus-switch id="element"></plus-switch>
<script>
  element.addEventListener('plusChange', () => {
    alert('plusChange event fired!');
  })
</script>
```
