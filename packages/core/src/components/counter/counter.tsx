import { Bind, Element, Event, EventEmitter, Method, Property, State, Watch } from '@htmlplus/element';
import { COUNTER_EASINGS } from './counter.constants';
import { CounterEasing } from './counter.types';

@Element()
export class Counter { 
  /**
   * TODO
   */
  @Property()
  easing?: CounterEasing = 'linear';   

  /**
   * TODO
   */
  @Property()
  decimal?: string = '.';

  /**
   * TODO
   */
  @Property()
  decimalPlaces?: number = 0;

  /**
   * TODO
   */
  @Property()
  delay?: number;

  /**
   * TODO
   */
  @Property()
  duration?: number = 1000;

  /**
   * TODO
   */
  @Property()
  end?: number;

  /**
   * TODO
   */
  @Property()
  play?: boolean;

  /**
   * TODO
   */
  @Property()
  separator?: string;

  /**
   * TODO
   */
  @Property()
  start?: number = 0;

  /**
   * TODO
   */
  @Event()
  plusComplete!: EventEmitter<void>;

  @State()
  counter?: number = 0;

  numerals?: string[] = [];

  requestAnimationFrame: number;

  get easingFunction() {
    return (COUNTER_EASINGS[this.easing] || this.easing) as any;
  }

  get formated() {
    const negative = (this.counter < 0) ? '-' : '';
    let result: string;
    let x1: string;
    let x2: string;
    let x3: string;
    result = Math.abs(this.counter).toFixed(this.decimalPlaces);
    result += '';
    const x = result.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? this.decimal + x[1] : '';
    if (this.separator) {
      x3 = '';
      for (let i = 0, length = x1.length; i < length; ++i) {
        if (i !== 0 && (i % 3) === 0) {
          x3 = this.separator + x3;
        }
        x3 = x1[length - i - 1] + x3;
      }
      x1 = x3;
    }
    if (this.numerals && this.numerals.length) {
      x1 = x1.replace(/[0-9]/g, (w) => this.numerals[+w]);
      x2 = x2.replace(/[0-9]/g, (w) => this.numerals[+w]);
    }
    return negative + x1 + x2;
  } 

  /**
   * External Methods
   */

  /**
   * TODO
   */
  @Method()
  pause() {
    cancelAnimationFrame(this.requestAnimationFrame);
    this.paused = true;
  }

  /**
   * TODO
   */
  @Method()  
  resume() {
    this.startTime = null;
    this.duration = this.remaining;
    this.startVal = this.counter;
    this.determineDirectionAndSmartEasing();
    this.requestAnimationFrame = requestAnimationFrame(this.count);
    this.paused = false;
  }

  /**
   * TODO
   */
  @Method()
  stop() { }

  /**
   * Internal Methods
   */

  @Bind()
  count(timestamp: number) {
    if (!this.startTime) this.startTime = timestamp; 

    const progress = timestamp - this.startTime;

    this.remaining = this.duration - progress;

    if (this.useEasing) {
      if (this.countDown) {
        this.counter = this.startVal - this.easingFunction(progress, 0, this.startVal - this.endVal, this.duration);
      } 
      else {
        this.counter = this.easingFunction(progress, this.startVal, this.endVal - this.startVal, this.duration);
      }
    } 
    else {
      this.counter = this.startVal + (this.endVal - this.startVal) * (progress / this.duration);
    }

    // don't go past endVal since progress can exceed duration in the last frame
    const wentPast = this.countDown ? this.counter < this.endVal : this.counter > this.endVal;

    this.counter = wentPast ? this.endVal : this.counter;

    this.counter = Number(this.counter.toFixed(this.decimalPlaces));

    console.log(this.counter, progress, progress < this.duration, this.finalEndVal)

    if (progress < this.duration) {
      this.requestAnimationFrame = requestAnimationFrame(this.count);
    } 
    else if (this.finalEndVal !== null) {
      cancelAnimationFrame(this.requestAnimationFrame);
      this.startTime = null;
      debugger
      this.endVal = this.finalEndVal;
      if (this.endVal === this.counter) return;
      this.startVal = this.counter;
      if (this.finalEndVal == null) {
        this.startTime = null;
        this.remaining = this.duration;
      }
      this.finalEndVal = null;
      this.determineDirectionAndSmartEasing();
    }
    else {
      return this.plusComplete();
    }
  } 

  /**
   * Watchers
   */

  @Watch()
  watcher(next, prev, name) { }

  /**
   * Lifecycles
   */

  connectedCallback() {
    if (!this.play) return;
    this.run();
  }

  disconnectedCallback() {  }

  render() {
    return this.formated;
  }

  // TODO
  startTime: number;
  remaining: number;
  endVal: number;
  startVal = 0;
  paused = true;
  countDown = false;
  useGrouping = false;
  useEasing = true;
  smartEasingThreshold = 999;
  smartEasingAmount = 333;
  finalEndVal: number = null; // for smart easing  
  reset(): void {
    cancelAnimationFrame(this.requestAnimationFrame);
    this.paused = true;
    this.startTime = null;
    this.remaining = this.duration;
    this.startVal = this.start;
    this.counter = this.startVal;
  }
  run() {
    if(isNaN(this.duration) || this.duration <= 0) 
      throw new Error('TODO');
    this.reset();
    this.endVal = this.end;
    this.useEasing = !!this.easing;  
    this.paused = false;
    setTimeout(() => {
      this.determineDirectionAndSmartEasing();
      this.paused = false;
      this.requestAnimationFrame = requestAnimationFrame(this.count);
    }, this.delay); 
  }
   /**
   * Smart easing works by breaking the animation into 2 parts, the second part being the
   * smartEasingAmount and first part being the total amount minus the smartEasingAmount. It works
   * by disabling easing for the first part and enabling it on the second part. It is used if
   * usingEasing is true and the total animation amount exceeds the smartEasingThreshold.
   */
  determineDirectionAndSmartEasing(): void {
    const end = (this.finalEndVal) ? this.finalEndVal : this.endVal;
    this.countDown = (this.startVal > end);
    const animateAmount = end - this.startVal;
    if (Math.abs(animateAmount) > this.smartEasingThreshold && this.useEasing) {
      this.finalEndVal = end;
      const up = (this.countDown) ? 1 : -1;
      this.endVal = end + (up * this.smartEasingAmount);
      this.duration = this.duration / 2;
    } else {
      this.endVal = end;
      this.finalEndVal = null;
    }
    if (this.finalEndVal !== null) {
      // setting finalEndVal indicates smart easing
      this.useEasing = false;
    } else {
      this.useEasing = !!this.easing;
    }
  }
}