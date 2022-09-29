```css [style]
plus-click-outside {
  margin: auto;
  display: block;
  max-width: 20rem;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class ClickOutsideDefault {
  @State()
  inside = 0;

  @State()
  outside = 0;

  onClick() {
    this.inside = this.inside + 1;
  }

  onClickOutside() {
    this.outside = this.outside + 1;
  }

  render() {
    return (
      <plus-click-outside
        onClick={() => this.onClick()}
        onPlusClickOutside={() => this.onClickOutside()}
      >
        <plus-card elevation="10">
          <plus-card-body>
            <b>{this.inside}</b> time(s) inside clicked
            <br />
            <b>{this.outside}</b> time(s) outside clicked
          </plus-card-body>
        </plus-card>
      </plus-click-outside>
    );
  }
}
```

```html [javascript:template]
<plus-click-outside id="element1">
  <plus-card elevation="10">
    <plus-card-body>
      <b id="element2">0</b> time(s) inside clicked
      <br />
      <b id="element3">0</b> time(s) outside clicked
    </plus-card-body>
  </plus-card>
</plus-click-outside>
```

```js [javascript:script]
let inside = 0;
let outside = 0;
element1.addEventListener('click', (event) => {
  inside = inside + 1;
  element2.innerHTML = inside;
});
element1.addEventListener('plus-click-outside', (event) => {
  outside = outside + 1;
  element3.innerHTML = outside;
});
```
