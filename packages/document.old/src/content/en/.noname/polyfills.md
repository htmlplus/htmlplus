
Edge and IE11 polyfills

If you want your custom elements to be able to work on older browsers, you should add the
`applyPolyfills()` that surround the `defineCustomElements()` function.

```js
applyPolyfills().then(() => defineCustomElements());
```