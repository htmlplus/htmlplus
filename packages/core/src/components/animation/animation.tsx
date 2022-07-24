import { Attributes, Bind, Element, Event, EventEmitter, Property } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { AnimationDirection, AnimationDuration, AnimationEasing, AnimationPlay } from './animation.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class Animation {

  /**
   * Specifies the aconnectedCallback of delay before starting the animation to play. 
   * This may be specified in either milliseconds.
   */
  @Property()
  delay?: number = 0;

  /**
   * Defines whether an animation should be played forwards, backwards or in alternate cycles.
   */
  @Property()
  direction?: AnimationDirection = 'normal';

  /**
   * Specifies the length of time it will take to complete one cycle between two defined states.
   */
  @Property()
  duration?: number = 1000;

  /**
   * TODO
   */
  @Property()
  easing?: AnimationEasing = 'linear';

  /**
   * Specifies the number of times the animation should be repeated after one complete cycle.
   */
  @Property()
  iterations?: number = Infinity;

  /**
   * Specifies what kind of animation you want to play. 
   * click [here](https://htmlplus.io/component/animation/names) to see the list of available animations.
   */
  @Property({ reflect: true })
  name: string;

  /**
   * Specifies the time that animation will start.
   */
  @Property({ reflect: true })
  play?: AnimationPlay;

  // TODO
  // currentTime
  // endDelay
  // fill
  // iterationStart
  // keyframes
  // playbackRate

  get $host() {
    return Helpers.host(this);
  }

  @Attributes()
  get attributes() {
    return {}
  }

  render() {
    return (
      <slot />
    )
  }
}
