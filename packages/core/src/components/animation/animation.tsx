import { Bind, Element, Event, EventEmitter, Method, Property, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { AnimationComposite, AnimationDirection, AnimationFill, AnimationIterationComposite, AnimationPlay } from './animation.types';

// TODO
const animations = {

}

/**
 * @slot default - The default slot.
 */
@Element()
export class Animation {

  /**
   * Determines how values are combined between this animation and other, 
   * separate animations that do not specify their own specific composite operation.
   */
  @Property()
  composite?: AnimationComposite = 'replace';

  /**
   * The number of milliseconds to delay the start of the animation.
   */
  @Property()
  delay?: number = 0;

  /**
   * Whether the animation runs forwards (normal), backwards (reverse), 
   * switches direction after each iteration (alternate), or runs 
   * backwards and switches direction after each iteration (alternate-reverse).
   */
  @Property()
  direction?: AnimationDirection = 'normal';

  /**
   * The number of milliseconds each iteration of the animation takes to complete.
   */
  @Property()
  duration?: number = 1000;

  /**
   * The rate of the animation's change over time. 
   * Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", 
   * or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)".
   */
  @Property()
  easing?: string = 'linear';

  /**
   * The number of milliseconds to delay after the end of an animation. 
   * This is primarily of use when sequencing animations based on the end time of another animation.
   */
  @Property()
  endDelay?: number = 0;

  /**
   * Dictates whether the animation's effects should be reflected by the element(s) 
   * prior to playing ("backwards"), retained after the animation has completed 
   * playing ("forwards"), or both.
   */
  @Property()
  fill?: AnimationFill = 'none';

  /**
   * Determines how values build from iteration to iteration in this animation. 
   * Can be set to accumulate or replace.
   */
  @Property()
  iterationComposite?: AnimationIterationComposite = 'replace';

  /**
   * The number of times the animation should repeat. 
   * And can also take a value of Infinity to make it repeat for as long as the element exists.
   */
  @Property()
  iterations?: number = 1;

  /**
   * Describes at what point in the iteration the animation should start. 
   * 0.5 would indicate starting halfway through the first iteration for example, 
   * and with this value set, an animation with 2 iterations would end halfway through 
   * a third iteration.
   */
  @Property()
  iterationStart?: number = 0;

  /**
   * TODO
   */
  @Property()
  keyframes?: Keyframe[];

  /**
   * Specifies what kind of animation you want to play. 
   * click [here](https://htmlplus.io/component/animation/names) to see the list of available animations.
   */
  @Property()
  name: string;

  /**
   * Specifies the time that animation will start.
   */
  @Property()
  play?: AnimationPlay;

  /**
   * TODO
   */
  @Property()
  playbackRate?: number = 1;

  /**
   * TODO
   */
  @Event()
  plusCancel!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event()
  plusFinish!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event()
  plusStart!: EventEmitter<void>;

  private animation?;

  get $host() {
    return Helpers.host(this);
  }

  /**
   * External Methods
   */

  /** 
   * TODO
   */
  @Method()
  cancel() {
    this.animation?.cancel();
  }

  /** 
   * TODO
   */
  @Method()
  finish() {
    this.animation?.finish();
  }

  /**
   * Internal Methods
   */

  destroy() { 
    if (!this.animation) return
    this.animation.cancel();
    this.animation.removeEventListener('cancel', this.onCancel);
    this.animation.removeEventListener('finish', this.onFinish);
    
    // TODO
    // this.hasStarted = false;
  }

  // TODO
  init() {
    // TODO
    const easing = ''//animations.easings[this.easing] ?? this.easing;
    const keyframes = []// this.keyframes ?? (animations as unknown as Partial<Record<string, Keyframe[]>>)[this.name];

    if (!keyframes) return;

    // TODO
    // this.destroyAnimation();

    this.animation = this.$host.animate(keyframes, {
      composite: this.composite,
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing: this.easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationComposite: this.iterationComposite,
      iterations: this.iterations,
      iterationStart: this.iterationStart,
      playbackRate: this.playbackRate,
    });

    this.animation.addEventListener('cancel', this.onCancel);
    this.animation.addEventListener('finish', this.onFinish);

    if(!this.play) return this.animation.pause();

    // TODO
    // this.hasStarted = true;
    this.plusStart();
  }

  /**
   * Watchers
   */

  @Watch()
  watcher(next, prev, name) {
    switch (name) {
      case 'play':
        if (!this.animation) return;
        // TODO
        // if (this.play && !this.hasStarted) {
        //   this.hasStarted = true;
        //   this.plusStart();
        // }
        if (this.play == true) this.animation.play();
        if (this.play != true) this.animation.pause(); 
      break;

      case 'playbackRate':
        if (!this.animation) return;
        this.animation.playbackRate = this.playbackRate;
        break;

      default:
        break;
    }
  }

  /**
   * Events handler
   */

  @Bind()
  onCancel() {
    this.play = false;

    // TODO
    // this.hasStarted = false;

    this.plusCancel();
  }

  @Bind()
  onFinish() {
    this.play = false;

    // TODO
    // this.hasStarted = false;

    this.plusFinish();
  }

  /**
   * Lifecycles
   */  
  
  connectedCallback() {
    this.init();
  }

  disconnectedCallback() {
    this.destroy();
  }

  render() {
    return (
      <slot />
    )
  }
}
