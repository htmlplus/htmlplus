import { PlusElement } from '../../types';
import { defineProperty, request } from '../utils/index.js';

export function State() {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    const name = String(propertyKey);

    const symbol = Symbol();

    function get(this) {
      return this[symbol];
    }

    function set(this, input) {
      const value = this[symbol];

      if (input === value) return;

      this[symbol] = input;

      request(this, name, value);
    }

    // TODO: configurable
    defineProperty(target, propertyKey, { get, set, configurable: true });
  };
}
