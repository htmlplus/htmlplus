import { Element, Property, State, Watch } from '@htmlplus/element';

@Element()
export class Counter {
  /**
   * TODO
   */
  @Property()
  easing?: boolean;

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

  get formated() {
    const negative = (this.frameVal < 0) ? '-' : '';
    let result: string;
    let x1: string;
    let x2: string;
    let x3: string;
    result = Math.abs(this.frameVal).toFixed(this.decimalPlaces);
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
   * Watchers
   */

  @Watch()
  watcher(next, prev, name) { }

  connectedCallback() {
    this.startVal = this.start
    this.frameVal = this.startVal;
    this.endVal = this.end;
    this.resetDuration();
    this.useEasing = this.easing;
    if (this.separator === '') {
      this.useGrouping = false;
    }

    // TODO
    // handleScroll

    this.paused = false;
    setTimeout(() => {
      if (this.duration > 0) {
        this.determineDirectionAndSmartEasing();
        this.paused = false;
        this.rAF = requestAnimationFrame(this.count);
      } else {
        this.frameVal = this.endVal;
      }
    }, 200);

    // TODO
    // scrolled past
    // self.reset();
  }

  render() {
    return this.formated;
  }

  // TODO
  @State()
  frameVal?: number = 0;
  rAF: any;
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
  easingFn(currentTime: number, beginningValue: number, changeInValue: number, duration: number): number {
    return changeInValue * (-Math.pow(2, -10 * currentTime / duration) + 1) * 1024 / 1023 + beginningValue;
  }
  resetDuration(): void {
    this.startTime = null;
    this.remaining = this.duration;
  }
  // reset to startVal so animation can be run again
  reset(): void {
    cancelAnimationFrame(this.rAF);
    this.paused = true;
    this.resetDuration();
    this.startVal = this.start;
    this.frameVal = this.startVal;
  }
  // pause/resume animation
  pause(): void {
    if (!this.paused) {
      cancelAnimationFrame(this.rAF);
    } else {
      this.startTime = null;
      this.duration = this.remaining;
      this.startVal = this.frameVal;
      this.determineDirectionAndSmartEasing();
      this.rAF = requestAnimationFrame(this.count);
    }
    this.paused = !this.paused;
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
      this.useEasing = this.easing;
    }
  }
  count = (timestamp: number): void => {
    if (!this.startTime) { this.startTime = timestamp; }

    const progress = timestamp - this.startTime;
    this.remaining = this.duration - progress;

    // to ease or not to ease
    if (this.useEasing) {
      if (this.countDown) {
        this.frameVal = this.startVal - this.easingFn(progress, 0, this.startVal - this.endVal, this.duration);
      } else {
        this.frameVal = this.easingFn(progress, this.startVal, this.endVal - this.startVal, this.duration);
      }
    } else {
      this.frameVal = this.startVal + (this.endVal - this.startVal) * (progress / this.duration);
    }

    // don't go past endVal since progress can exceed duration in the last frame
    const wentPast = this.countDown ? this.frameVal < this.endVal : this.frameVal > this.endVal;
    this.frameVal = wentPast ? this.endVal : this.frameVal;

    // decimal
    this.frameVal = Number(this.frameVal.toFixed(this.decimalPlaces));

    // whether to continue
    if (progress < this.duration) {
      this.rAF = requestAnimationFrame(this.count);
    } else if (this.finalEndVal !== null) {
      // smart easing
      this.update(this.finalEndVal);
    } else {
      // TODO
      // if (this.callback) {
      //   this.callback();
      // }
    }
  }
  // pass a new endVal and start animation
  update(newEndVal: string | number): void {
    cancelAnimationFrame(this.rAF);
    this.startTime = null;
    this.endVal = newEndVal;
    if (this.endVal === this.frameVal) return;
    this.startVal = this.frameVal;
    if (this.finalEndVal == null) this.resetDuration();
    this.finalEndVal = null;
    this.determineDirectionAndSmartEasing();
    this.rAF = requestAnimationFrame(this.count);
  }
}