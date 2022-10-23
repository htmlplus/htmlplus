```css [style]
.center {
  text-align: center;
  padding: 2.5rem 0;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class SwitchEvent {
  onChange(event) {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
  render() {
    return (
      <div class="center">
        <plus-switch onPlusChange={(event) => this.onChange(event)}></plus-switch>
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
  window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
});
```
