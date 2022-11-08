To see all animations click [here](/component/animation/names).

```css [style]
plus-animation {
  background: lightgray;
  width: 100px;
  height: 100px;
  margin: auto;
}
```

```html [template]
<plus-grid justify-content="evenly" gutter="md">
  <plus-grid-item xs="12" sm="auto">
    <plus-animation name="fade-in" iterations="Infinity" play></plus-animation>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-animation name="fade-out" iterations="Infinity" play></plus-animation>
  </plus-grid-item>
</plus-grid>
```
