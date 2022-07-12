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
    let timeout, value;

    const name = String(propertyKey);

    function get(this) {
      return value;
    }

    function set(this, input) {
      if (input === value) return;

      value = input;

      request(this, { [name]: [input, value] }).then(() => {
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
