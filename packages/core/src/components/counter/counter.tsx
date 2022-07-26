import { Element, Property, State, Watch } from '@htmlplus/element';

@Element()
export class Counter {
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
  prefix?: string;

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
  @Property()
  suffix?: string;

  @State()
  counter?: number;

  // TODO
  numerals = [];

  format(number: number) { 
    const neg = (number < 0) ? '-' : '';
    let result: string;
    let x1: string;
    let x2: string;
    let x3: string;
    result = Math.abs(number).toFixed(this.decimalPlaces);
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
    return neg + this.prefix + x1 + x2 + this.suffix; 
  }

  /**
   * Watchers
   */

  @Watch()
  watcher(next, prev, name) { }

  render() {
    return this.format(this.counter);
  }
}
