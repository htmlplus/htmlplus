import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
import { appendToMethod, host } from '../utils/index.js';

/**
 * Monitors properties and states to catch changes.
 * The decorated method will be invoked after any
 * changes with the key, newValue, and oldValue as parameters.
 * If the arguments aren't defined, all of the properties and states are considered.
 */
export function Watch(...keys: Array<string>) {
  return function (target: PlusElement, propertyKey: PropertyKey): void {
    // Removes duplicates.
    keys = keys.filter((key, index) => keys.indexOf(key) === index);
    // Registers a lifecycle to detect changes.
    appendToMethod(target, CONSTANTS.LIFECYCLE_UPDATED, function ([states]) {
      // Includes all fields, If any keys hadn't been defined.
      if (!keys.length) keys = Object.keys(states);
      // Loops the keys
      for (const key of keys) {
        // Checks the existence of keys in the current state.
        if (states?.[key]) {
          // Invokes the method with parameters.
          this[propertyKey](...states[key], key);
          // Breaks the current iteration.
          continue;
        }
        // Checks the existence of keys in the instance.
        if (!(key in this)) {
          // Announces the warning.
          console.warn(`The key '${key}' that was used in '@Watch()' is invalid!`, host(this));
        }
      }
    });
  };
}
