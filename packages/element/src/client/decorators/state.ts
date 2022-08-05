import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
import { defineProperty, request } from '../utils/index.js';

export function State() {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    const name = String(propertyKey);

    const values = new Map();

    function get(this) {
      return values.get(this);
    }

    function set(this, input) {
      const value = values.get(this);

      if (input === value) return;

      values.set(this, input);

      request(this, { [name]: [input, value] })
        .then(() => undefined)
        .catch((error) => {
          throw error;
        });
    }

    // TODO: configurable
    defineProperty(target, propertyKey, { get, set, configurable: true });
  };
}
