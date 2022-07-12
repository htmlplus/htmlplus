import { PlusElement } from '../../types/index.js';
import { defineProperty, request } from '../utils/index.js';

export function State() {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    let value;

    const name = String(propertyKey);

    function get(this) {
      return value;
    }

    function set(this, input) {
      if (input === value) return;

      value = input;

      request(this, { [name]: [input, value] })
        .then(() => undefined)
        .catch((error) => {
          throw error;
        });
    }

    defineProperty(target, propertyKey, { get, set });
  };
}
