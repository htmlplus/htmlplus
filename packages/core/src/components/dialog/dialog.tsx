import { Attributes, Bind, Element, Event, EventEmitter, Property, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { Animation, ClickOutside, Portal, Scrollbar, createLink } from '@app/services';
import { DialogFullscreen, DialogPlacement, DialogPortalStrategy, DialogPortalTarget, DialogSize } from './dialog.types';

const { Action, Observable, reconnect } = createLink({
  crawl: false,
  namespace: ({ connector }) => connector ? `Dialog:${connector}` : undefined
});

/**
 * @part backdrop - Backdrop element.
 * @slot default - The default slot.
 */
@Element()
export class Dialog {

  /**
   * TODO
   */
  @Property({ reflect: true })
  animation?: string;

  /**
   * Activate the dialog's backdrop to show or not.
   */
  @Property()
  backdrop?: boolean = true;

  /**
   * This property helps you to attach which dialog toggler controls the dialog. 
   * It doesn't matter where the dialog toggler is. 
   * You can put the dialog's toggler inside or outside of the dialog. 
   * Read more about connectors [here](/connector).
   */
  @Property()
  connector?: string;

  /**
   * Set the height of the dialog as much as the screen's height.
   */
  @Property()
  fullHeight?: boolean;

  /**
   * Set the width of the dialog as much as the screen's width.
   */
  @Property()
  fullWidth?: boolean;

  /**
   * Set both width and height of the dialog to occupy the screen size.
   */
  @Property()
  fullscreen?: DialogFullscreen;

  /**
   * Closes the dialog when `escape` key is pressed.
   */
  @Property()
  keyboard?: boolean = true;

  /**
   * Control dialog to show or not.
   */
  @Property({ reflect: true })
  open?: boolean;

  /**
   * It prevents the dialog from closing on clicking outside of the element.
   */
  @Property()
  persistent?: boolean;

  /**
   * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical. 
   * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
   */
  @Property()
  placement?: DialogPlacement = 'top';

  /**
   * Enables or disables the portal.
   * @experimental
   */
  @Property()
  portal?: boolean;

  /**
   * Specifies the position of the dialog.
   * @experimental
   */
  @Property()
  portalStrategy?: DialogPortalStrategy = 'append';

  /**
   * Specifies the position of the dialog relative to the target.
   * @experimental
   */
  @Property()
  portalTarget?: DialogPortalTarget = 'body';

  /**
   * It makes the user able to scroll the content by adding a scroll beside it.
   */
  @Property()
  scrollable?: boolean;

  /**
   * Determine the width of the dialog.
   */
  @Property()
  size?: DialogSize;

  /**
   * Removes the margin around the dialog's content.
   */
  @Property()
  sticky?: boolean;

  /**
   * When the dialog is going to hide
   */
  @Event({ cancelable: true })
  plusClose!: EventEmitter<void>;

  /**
   * When the dialog is completely closed and its animation is completed.
   */
  @Event()
  plusClosed!: EventEmitter<void>;

  /**
   * When the dialog is going to show this event triggers
   */
  @Event({ cancelable: true })
  plusOpen!: EventEmitter<void>;

  /**
   * When the dialog is completely shown and its animation is completed.
   */
  @Event()
  plusOpened!: EventEmitter<void>;

  static instances = [];

  $cell!: HTMLElement;

  animate?: Animation;

  isOpen?: boolean;

  // TODO: replace with FC
  portalInstance?: Portal;

  @Observable()
  tunnel?: boolean;

  get $host() {
    return Helpers.host(this);
  }

  @Attributes()
  get attributes() {

    const attributes = {
      'tabindex': -1,
    }

    if (this.isOpen) {
      attributes['role'] = 'dialog';
      attributes['aria-modal'] = 'true';
    }
    else {
      attributes['aria-hidden'] = 'true';
    }

    return attributes;
  }

  get classes() {

    let placement = (this.placement || '');

    if (placement.match(/^(top|bottom)$/)) placement = `-${placement}`;

    let [x, y] = placement.split('-');

    x = x || 'center';

    y = y || 'center';

    x = Helpers.toAxis(x, Helpers.isRTL(this));

    return Helpers.classes([
      'dialog',
      {
        x,
        y,
        size: this.size,
        sticky: this.sticky,
        fullWidth: this.fullWidth,
        fullHeight: this.fullHeight,
        fullscreen: this.fullscreen,
        scrollable: this.scrollable
      }
    ], true)
  }

  get isCurrent() {

    const instances = Dialog.instances;

    const last = instances.length - 1;

    return instances[last] === this;
  }

  get zIndex() {

    if (Dialog.instances.length < 1) return;

    const [instance] = Dialog.instances.slice(-1);

    if (!instance) return;

    const zIndex = Helpers.getComputedStyle(instance.$host, 'z-index');

    return `${parseInt(zIndex) + 1}`;
  }

  /**
   * External Methods
   */

  hide() {
    this.tryHide(true, false);
  }

  show() {
    this.tryShow(true, false);
  }

  @Action()
  toggle() {
    this.isOpen ? this.hide() : this.show();
  }

  /**
   * Internal Methods
   */

  broadcast(value) {
    this.tunnel = value;
  }

  initialize() {

    this.animate = new Animation({
      key: 'state',
      source: () => this.$host,
      target: () => this.$host,
      state: this.open ? 'entered' : 'leaved',
      states: {
        enter: 'open',
        entering: 'opening',
        entered: 'opened',
        leave: 'close',
        leaving: 'closing',
        leaved: 'closed',
      }
    })

    if (!this.open) return;

    this.tryShow(false, true);
  }

  terminate() {

    this.onHide();

    this.animate?.dispose();
  }

  tryHide(animation, silent) {

    if (!this.isOpen) return;

    if (!silent && this.plusClose().defaultPrevented) return;

    if (!animation) return this.onHide();

    this.animate.leave({
      onLeave: () => {

        // TODO: experimantal new link
        this.broadcast(false);
      },
      onLeaved: () => {

        // TODO: experimantal portal
        this.portalInstance?.revert();

        this.onHide();

        if (silent) return;

        this.plusClosed()
      }
    })
  }

  tryShow(animation, silent) {

    if (this.isOpen) return;

    if (!silent && this.plusOpen().defaultPrevented) return;

    if (!animation) return this.onShow();

    this.animate.enter({
      onEnter: () => {
        this.onShow();
      },
      onEntered: () => {

        if (silent) return;

        this.plusOpened();
      }
    })
  }

  /**
   * Watchers
   */

  @Watch(['connector', 'open'])
  watcher(next, prev, name) {

    switch (name) {

      case 'connector':

        reconnect(this);

        break;

      case 'open':

        next && !this.isOpen && this.tryShow(true, true);

        !next && this.isOpen && this.tryHide(true, true);

        break;
    }
  }

  /**
   * Events handler
   */

  onHide() {

    // reset document's scroll
    Scrollbar.reset(this);

    // remove outside click listener
    ClickOutside.off(this.$cell);

    // remove keydown listener
    Helpers.off(document, 'keydown', this.onEscape, true);

    // reset z-index
    this.$host.style.zIndex = null;

    // update state
    this.open = this.isOpen = false;

    // unregister dialog's instance
    Dialog.instances = Dialog.instances.filter((instance) => instance !== this);

    // TODO: experimantal new link
    this.broadcast(false);
  }

  onShow() {

    // TODO: experimantal portal
    this.portalInstance = this.portal && new Portal({
      source: this.$host,
      target: this.portalTarget,
      strategy: this.portalStrategy,
    })

    // remove document's scroll
    Scrollbar.remove(this);

    // remove outside click listener
    ClickOutside.on(this.$cell, this.onClickOutside, false);

    // add keydown listener
    Helpers.on(document, 'keydown', this.onEscape, true);

    // set z-index
    this.$host.style.zIndex = this.zIndex;

    // update state
    this.open = this.isOpen = true;

    // register dialog's instance
    Dialog.instances.push(this);

    // TODO: experimantal new link
    this.broadcast(true);
  }

  @Bind()
  onEscape(event) {

    if (!this.isOpen || !this.isCurrent) return;

    if (!this.keyboard || event.key !== 'Escape') return;

    event.preventDefault();

    this.tryHide(true, false);
  }

  @Bind()
  onClickOutside() {

    if (!this.isOpen || !this.isCurrent || this.persistent) return;

    this.tryHide(true, false);
  }

  /**
   * Lifecycles
   */

  // TODO: it's can not be `connectedCallback`, because ClickOutside incompatible 
  connectedCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <>
        {this.backdrop && (<div className="backdrop" part="backdrop"><div /></div>)}
        <div className={this.classes}>
          <div className="table">
            <div className="cell" ref={this.$cell}>
              <slot />
            </div>
          </div>
        </div>
      </>
    )
  }
}
