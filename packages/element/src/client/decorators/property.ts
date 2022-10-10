import { paramCase } from 'change-case';

import { PlusElement } from '../../types';

import * as CONSTANTS from '../../constants/index.js';
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

    const type = getMemberType(target, name);

    const values = new Map();

    function get(this) {
      return values.get(this);
    }

    function set(this, input) {
      const value = values.get(this);

      if (input === value) return;

      values.set(this, input);

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
