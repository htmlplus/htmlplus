import { Attributes, Bind, Element, Event, EventEmitter, Property, State, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { IntersectionBehavior } from './intersection.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class Intersection {

  /**
   * It specifies how intersection behaves with its children. 
   */
  @Property()
  behavior?: IntersectionBehavior = 'normal';

  /**
   * Disables the intersection's trigger.
   */
  @Property()
  disabled?: boolean;

  /**
   * It causes the callback to be called just once for the first time.
   */
  @Property()
  once?: boolean;

  /**
   * The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. 
   * Defaults to the browser viewport if not specified or if null.
   */
  @Property()
  root?: Element;

  /**
   * Margin around the root. Can have values similar to the CSS [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) property, e.g. 
   * "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. 
   * This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. 
   * Defaults to all zeros.
   */
  @Property()
  rootMargin?: string;

  /**
   * Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. 
   * If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. 
   * If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. 
   * The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). 
   * A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
   */
  @Property()
  threshold?: number | number[];

  /**
   * This event is triggered when its children intersects with the viewport in either coming to the viewport or going out of it.
   */
  @Event()
  plusChange!: EventEmitter<IntersectionObserverEntry>;

  @State()
  isIntersecting?: boolean;

  @State()
  isVisible?: boolean;

  observer?: IntersectionObserver;

  @Attributes()
  get attributes() {
    return {
      intersecting: this.isIntersecting
    }
  }

  get isDisconnected() {
    return this.once && this.isIntersecting;
  }

  get option() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }
  }

  /**
   * Internal Methods
   */

  bind() {

    this.observer = new IntersectionObserver(this.onIntersecting, this.option);

    this.observer.observe(Helpers.host(this));
  }

  unbind() {

    this.observer?.disconnect();

    delete this.observer;
  }

  rebind() {

    this.unbind();

    this.bind();
  }

  setVisible() {

    switch (this.behavior) {

      case 'appear':

        this.isVisible = this.isIntersecting;

        break;

      case 'blink':

        if (!this.isIntersecting) return;

        this.isVisible = false;

        requestAnimationFrame(() => this.isVisible = true);

        break;

      default:

        this.isVisible = true;

        break;
    }
  }

  /**
   * Watchers
   */

  @Watch(['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'])
  watcher(next, prev, name) {

    switch (name) {

      case 'behavior':

        this.isVisible = next !== 'appear';

        break;

      case 'disabled':

        next && this.unbind();

        !next && !this.isDisconnected && this.bind();

        break;

      case 'once':

        break;

      case 'root':
      case 'rootMargin':
      case 'threshold':

        !this.disabled && !this.isDisconnected && this.rebind();

        break;
    }
  }

  /**
   * Events handler
   */

  @Bind()
  onIntersecting(entries: IntersectionObserverEntry[]) {

    const [entry] = entries;

    this.isIntersecting = entry.isIntersecting;

    this.setVisible();

    this.plusChange(entry);

    if (!this.isIntersecting || !this.once) return;

    this.unbind();
  }

  /**
   * Lifecycles
   */

  connectedCallback() {

    this.isVisible = (this.behavior !== 'appear');

    !this.disabled && this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return this.isVisible ? <slot /> : undefined;
  }
}