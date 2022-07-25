import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
import { appendToMethod, host } from '../utils/index.js';

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
      // Gets all keys
      const keys = Object.keys(states);
      // Loops the keys
      for (const key of keys) {
        // Finds current key in keys
        const has = keys?.some((x) => x == key);
        // Checks the existence of key
        if (!has && !!keys?.length) continue;
        // Gets the current state
        const state = states?.[key];
        // Destructs the state
        const [next, prev, isInitial] = state;
        // TODO
        if (!immediate && isInitial) continue;
        // Invokes the method with parameters.
        this[propertyKey](next, prev, key);
      }
    });
  };
}
