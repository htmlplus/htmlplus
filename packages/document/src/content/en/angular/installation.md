# Angular

To utilize web components in your angular application follow these steps.

## Install

Installing `{Constants.PLATFORM_NAME}` package using node package manager.

```shell
npm install {Constants.PORT_ANGULAR_PACKAGE_NAME}
```

## Import

Finally the `main.ts` would be something like this.

```js
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import package
import { applyPolyfills, defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_LOADER}';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

// Bind the custom elements to the window object
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

## Usage

TODO

## Properties

TODO

## Events

TODO
