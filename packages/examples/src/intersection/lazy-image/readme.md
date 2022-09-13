This is also used for lazy loading.

```css [style]
.container {
  position: relative;
  height: 20rem;
  overflow: auto;
  background-color: #eeeeee;
}

plus-intersection {
  text-align: center;
  margin: 1000px auto;
}

[data-hidden] {
  display: none;
}

img {
  display: block;
  width: 12rem;
  height: 12rem;
  object-fit: cover;
}

plus-card {
  display: inline-block;
}

plus-spinner {
  margin: 1rem;
}
```

```tsx [script] [dock]
import { Element } from '@htmlplus/element';

@Element()
class IntersectionLazyImage {
  onChange(event) {
    if (!event.detail.isIntersecting) return;

    setTimeout(() => {
      const image = event.target.querySelector('img');

      const spinner = event.target.querySelector('plus-spinner');

      const src = image.getAttribute('data-src');

      image.setAttribute('src', src);

      image.removeAttribute('data-hidden');

      spinner.setAttribute('data-hidden', 'true');
    }, 1000);
  }

  render() {
    return (
      <div class="container">
        <plus-intersection
          once
          onPlusChange={(event) => this.onChange(event)}
        >
          <plus-card elevation="10">
            <plus-spinner></plus-spinner>
            <img
              data-hidden="true"
              data-src="https://placekitten.com/200/200"
              alt="Lazy Image"
            />
          </plus-card>
        </plus-intersection>
      </div>
    );
  }
}
```

```html [javascript:template]
<div class="container">
  <plus-intersection id="element1" once>
    <plus-card elevation="10">
      <plus-spinner></plus-spinner>
      <img
        data-hidden="true"
        data-src="https://placekitten.com/200/200"
        alt="Lazy Image"
      />
    </plus-card>
  </plus-intersection>
</div>
```

```js [javascript:script]
element1.addEventListener('plusChange', (event) => {
  if (!event.detail.isIntersecting) return;

  setTimeout(() => {
    const image = event.target.querySelector('img');

    const spinner = event.target.querySelector('plus-spinner');

    const src = image.getAttribute('data-src');

    image.setAttribute('src', src);

    image.removeAttribute('data-hidden');

    spinner.setAttribute('data-hidden', 'true');
  }, 1000);
});
```
