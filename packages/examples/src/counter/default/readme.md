```css [style]
.center {
  text-align: center;
}
button {
  margin: 0 0.5rem;
}
```

```tsx [script]
import { Element, State } from '@htmlplus/element';

@Element()
class CounterDefault {
  @State()
  play = false;
  render() {
    return (
      <div class="center">
        <plus-counter to="1000" play={this.play} onPlusComplete={() => this.play = false}></plus-counter>
        <br />
        <br />
        <button onClick={() => this.play = true}>Start</button>
        <button onClick={() => this.play = false}>Reset</button>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="center">
    <plus-counter id="counter1" to="1000"></plus-counter>
    <br />
    <br />
    <button id="button1">Start</button>
    <button id="button2">Reset</button>
</div>
```

```js [javascript:script]
button1.addEventListener('click', () => {
  counter1.play = true;
});
button1.addEventListener('click', () => {
  counter1.play = false;
});
```

```html [vue:template]
<div class="center">
    <plus-counter to="1000" :play="play"></plus-counter>
    <br />
    <br />
    <button @click="play = true">Start</button>
    &nbsp;
    <button @click="play = false">Reset</button>
</div>
```

```js [vue:script]
export default {
  data() {
    return {
        play: false
    };
  },
};
```
