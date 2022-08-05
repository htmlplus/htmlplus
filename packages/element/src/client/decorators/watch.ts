import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
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
    appendToMethod(target, CONSTANTS.LIFECYCLE_UPDATED, function ([states]) {
      // Loops the keys
      for (const key of Object.keys(states)) {
        // TODO
        if (keys?.length && !keys.includes(key)) continue;
        // Checks the existence of key
        if (keys?.length && !(key in states)) continue;
        // Gets the current state
        const [next, prev] = states[key];
        // TODO
        if (!immediate && this[CONSTANTS.API_STATUS] != 'loaded') continue;
        // Invokes the method with parameters.
        this[propertyKey](next, prev, key);
      }
    });
  };
}
