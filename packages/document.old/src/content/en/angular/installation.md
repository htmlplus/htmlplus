# Angular

`HTMLPLUS` web components are fully [compatible](https://custom-elements-everywhere.com/#angular) with Angular framework.

## Install

Install `HTMLPLUS` package into Angular application.

```shell
npm install @htmlplus/core
```

## Update Angular Module

Tell Angular to ignore all custom element tags defined in the `@htmlplus/core`.

```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

## Usage

Import the reference of components.

```js
import { Component } from '@angular/core';

import '@htmlplus/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { }
```

```html
<plus-switch />
```

<br/>

<Alert type="info">
All `HTMLPLUS` components are available as same as a local tag (div, video, etc.) in the angular project.
</Alert>

## Properties

To set properties and attributes.

```html
<plus-switch disabled />
```

## Events

To handle event's callback.

```js
import { Component } from '@angular/core';

import '@htmlplus/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onChange() {
    alert('The switch toggled!');
  }
}
```

```html
<plus-switch (plus-change)="onChange()" />
```
