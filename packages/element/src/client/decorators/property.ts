import { paramCase } from 'change-case';

import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
import {
  defineProperty,
  getMembers,
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
    let timeout;

    const name = String(propertyKey);

    const values = new Map();

    function get(this) {
      return values.get(this);
    }

    function set(this, input) {
      const value = values.get(this);

      if (input === value) return;

      values.set(this, input);

      request(this, { [name]: [input, value, !this[CONSTANTS.API_READY]] }).then(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (!options?.reflect) return;
          const element = host(this);
          const attribute = paramCase(name);
          const type = getMembers(target)[name].at(0);
          const raw = element.getAttribute(attribute);
          const parsed = parseValue(raw, type);
          if (input === parsed) return;
          updateAttribute(element, attribute, input);
        });
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

      defineProperty(element, propertyKey, { get, set });
    });
  };
}
