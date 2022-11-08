import { Attributes, Bind, Element, Event, EventEmitter, Property, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { ScrollIndicatorSource } from './scroll-indicator.types';

/**
 * @part indicator - Indicator element.
 */
@Element()
export class ScrollIndicator {

  /**
   * Disables the component function.
   */
  @Property()
  disabled?: boolean;

  /**
   * Specifies the source of scroll.
   */
  @Property()
  source?: ScrollIndicatorSource = 'document';

  /**
   * Indicates which scroll (horizontal or vertical) to be used as its source.
   */
  // @Property({ reflect: true })
  vertical?: boolean;

  /**
   * When the children is scrolled this event trigger.
   */
  @Event()
  plusScroll: EventEmitter<number>;

  $indicator!: HTMLElement;

  get $source() {

    if (typeof this.source !== 'string') return this.source;

    if (this.source === 'document') return document;

    return document.querySelector(this.source);
  }

  @Attributes()
  get attributes() {
    return {
      // 'role': 'TODO'
    }
  }

  get progress() {

    // TODO: any type not valid
    let $source = this.$source as any;

    if (!$source) return 0;

    $source = this.$source['documentElement'] ?? $source;

    const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = $source;

    const offset = this.vertical ? scrollLeft : scrollTop;

    const overflow = this.vertical ? scrollWidth - clientWidth : scrollHeight - clientHeight;

    return Math.round(offset / overflow * 100);
  }

  /**
   * Internal Methods
   */

  bind() {

    if (this.disabled) return;

    Helpers.on(this.$source, 'scroll', this.onScroll);

    this.onScroll();
  }

  unbind() {
    Helpers.off(this.$source, 'scroll', this.onScroll);
  }

  /**
   * Watchers
   */

  @Watch(['disabled', 'source'])
  watcher(next) {
    next ? this.unbind() : this.bind();
  }

  /**
   * Events handler
   */

  @Bind()
  onScroll() {

    const progress = this.progress;

    const property = this.vertical ? 'height' : 'width';

    this.$indicator.style[property] = `${progress}%`;

    this.plusScroll(progress);
  }

  /**
   * Lifecycles
   */

  loadedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <div
        className="indicator"
        part="indicator"
        ref={this.$indicator}
      />
    )
  }
}
