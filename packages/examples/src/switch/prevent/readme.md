```css [style]
.center {
  text-align: center;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class SwitchPrevent {
  ensure(event) {
    if (window.confirm('Are you sure you want to toggle it?')) return;
    event.preventDefault();
  }
  render() {
    return (
      <div class="center">
        <plus-switch onPlusChange={(event) => this.ensure(event)}></plus-switch>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="center">
  <plus-switch id="element1"></plus-switch>
</div>
```

```js [javascript:script]
element1.addEventListener('plus-change', (event) => {
  if (window.confirm('Are you sure you want to toggle it?')) return;
  event.preventDefault();
});
```
