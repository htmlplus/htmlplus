import { Bind, Element, Event, EventEmitter, Property, State, Watch } from '@htmlplus/element';
import { COUNTER_EASINGS } from './counter.constants';
import { CounterEasing } from './counter.types';

@Element()
export class Counter { 
  /**
   * TODO
   */
  @Property()
  easing?: CounterEasing = 'ease-out-expo';   

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
  from?: number = 0;

  /**
   * TODO
   */
  @Property({ reflect: true })
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
  to?: number;

  /**
   * TODO
   */
  @Event()
  plusComplete!: EventEmitter<void>;

  @State()
  counter?: number = 0;

  numerals?: string[];
  
  remaining?: number;

  requestAnimationFrame?: number;
  
  startTime?: number;

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

  get reverse() {
    return this.to < this.from;
  } 

  /**
   * Internal Methods
   */

  @Bind()
  count(timestamp: number) {
    if (!this.startTime) this.startTime = timestamp; 

    const progress = timestamp - this.startTime;

    this.remaining = this.duration - progress;

    if (!this.easingFunction) {
      this.counter = this.from + (this.to - this.from) * (progress / this.duration);
    } else if (this.reverse) {
      this.counter = this.from - this.easingFunction(progress, 0, this.from - this.to, this.duration);
    } else {
      this.counter = this.easingFunction(progress, this.from, this.to - this.from, this.duration);
    }

    const done = this.reverse ? this.counter < this.to : this.counter > this.to;

    this.counter = done ? this.to : this.counter;

    this.counter = Number(this.counter.toFixed(this.decimalPlaces));

    if (progress >= this.duration) return this.plusComplete();

    this.requestAnimationFrame = requestAnimationFrame(this.count);
  } 
  
  start() {
    this.stop();
    setTimeout(() => {
      this.requestAnimationFrame = requestAnimationFrame(this.count);
    }, this.delay); 
  } 

  stop() { 
    cancelAnimationFrame(this.requestAnimationFrame);
    this.remaining = this.duration;
    this.startTime = undefined;
    // TODO: no need requestAnimationFrame
    requestAnimationFrame(() => {
      this.counter = this.from;
    });
  }

  /**
   * Watchers
   */

  @Watch()
  watcher(next, prev, name) { 
    switch (name) {
      case 'play':
        this.play ? this.start() : this.stop();        
        break;
    }
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.play && this.start();
  }

  disconnectedCallback() {
    this.stop();
  }

  render() {
    return this.formated;
  } 
}