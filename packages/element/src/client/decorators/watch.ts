import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { appendToMethod } from '../utils/index.js';

/**
 * Monitors properties and states to catch changes.
 * The decorated method will be invoked after any
 * changes with the key, newValue, and oldValue as parameters.
 * If the arguments aren't defined, all of the properties and states are considered.
 */
export function Watch(keys?: Array<string>, immediate?: boolean) {
  return function (target: PlusElement, propertyKey: PropertyKey): void {
    // Registers a lifecycle to detect changes.
    appendToMethod(target, CONSTANTS.LIFECYCLE_UPDATED, function (states: Map<string, any>) {
      // Loops the keys
      states.forEach((prev, key) => {
        // TODO
        if (keys?.length && !keys.includes(key)) return;
        // TODO
        if (!immediate && !this[CONSTANTS.API_IS_LOADED]) return;
        // Invokes the method with parameters.
        this[propertyKey](this[key], prev, key);
      });
    });
  };
}
