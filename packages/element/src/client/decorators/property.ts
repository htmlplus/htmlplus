import { paramCase } from 'change-case';

import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import {
  defineProperty,
  getMemberType,
  host,
  parseValue,
  request,
  updateAttribute,
  appendToMethod
} from '../utils/index.js';

export interface PropertyOptions {
  // TODO
  // attribute?: boolean | string;
  /**
   * Whether property value is reflected back to the associated attribute. default is `false`.
   */
  reflect?: boolean;
}

export function Property(options?: PropertyOptions) {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    const name = String(propertyKey);

    const attribute = paramCase(name);

    const symbol = Symbol();

    const type = getMemberType(target, name);

    function get(this) {
      return this[symbol];
    }

    function set(this, input) {
      const value = this[symbol];

      if (input === value) return;

      this[symbol] = input;

      const isReady = this[CONSTANTS.API_STATUS] == 'initialize';

      request(this, { [name]: [input, value] }).then(() => {
        const element = host(this);
        const has = element.hasAttribute(attribute);
        if (!isReady && has) return;
        if (!options?.reflect) return;
        const raw = element.getAttribute(attribute);
        const parsed = parseValue(raw, type);
        if (input === parsed) return;
        updateAttribute(element, attribute, input);
      });
    }

    defineProperty(target, propertyKey, { get, set });

    appendToMethod(target, CONSTANTS.LIFECYCLE_CONNECTED, function () {
      const element = host(this);

      const get = () => {
        return this[propertyKey];
      };

      const set = (input) => {
        this[propertyKey] = input;
      };

      // TODO: configurable
      defineProperty(element, propertyKey, { get, set, configurable: true });
    });
  };
}
