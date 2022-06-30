import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
import { appendToMethod, host, sync } from '../utils/index.js';

export function Attributes() {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    const updates = new Map();
    appendToMethod(target, CONSTANTS.LIFECYCLE_CONNECTED, function () {
      updates.set(this, sync(host(this)));
    });
    appendToMethod(target, CONSTANTS.LIFECYCLE_UPDATED, function () {
      updates.get(this)(this[propertyKey]);
    });
  };
}
