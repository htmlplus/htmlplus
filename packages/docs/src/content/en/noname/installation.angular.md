# Angular

To utilize `{Constants.PLATFORM_NAME}` components in Anglular applications it's better to use special Angular library instead of importing web components directly. So it's better to do these steps:

1- Installing `{Constants.PLATFORM_NAME}` package using node
```html
npm install {Constants.PORT_ANGULAR_PACKAGE_NAME}
```

2- Importing in Angular components.
```js
import { ComponentLibraryModule } from '{Constants.PORT_ANGULAR_PACKAGE_NAME}';

@NgModule({
  ...
  imports: [
    ComponentLibraryModule
  ]
  ...
})
export class AppModule { }
```

If you have to use web components directly you can follow these steps:
[standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE})

1- Installing `{Constants.PLATFORM_NAME}` packing using npm
```html
npm install {Constants.PORT_ANGULAR_PACKAGE_NAME}
```

2- Bind the custom elements to the window object
```js
import { defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_LOADER}';

defineCustomElements();
```

Edge and IE11 polyfills

If you want your custom elements to be able to work on older browsers, you should add the
`applyPolyfills()` that surround the `defineCustomElements()` function.

```js
applyPolyfills().then(() => defineCustomElements());
```

Finally the  `main.ts` would be something like this.
```js
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { applyPolyfills, defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_LOADER}';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

applyPolyfills().then(() =>  defineCustomElements());
```

TODO
```js
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
}),
export class AppModule {}
```
