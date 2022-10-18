import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { appendToMethod, host, syncAttributes } from '../utils/index.js';

export function Attributes() {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    appendToMethod(target, CONSTANTS.LIFECYCLE_CONNECTED, function () {
      this[CONSTANTS.SYNC] = syncAttributes(host(this));
    });
    appendToMethod(target, CONSTANTS.LIFECYCLE_UPDATED, function () {
      this[CONSTANTS.SYNC](this[propertyKey]);
    });
  };
}
