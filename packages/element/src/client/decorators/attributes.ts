import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { appendToMethod, host, sync } from '../utils/index.js';

export function Attributes() {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    const symbol = Symbol();
    appendToMethod(target, CONSTANTS.LIFECYCLE_CONNECTED, function () {
      this[symbol] = sync(host(this));
    });
    appendToMethod(target, CONSTANTS.LIFECYCLE_UPDATED, function () {
      this[symbol](this[propertyKey]);
    });
  };
}
