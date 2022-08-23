import { paramCase } from 'change-case';

import { PlusElement } from '../../types/index.js';
import { defineProperty, host } from '../utils/index.js';

import { getConfig } from '../utils/config.js';

export type EventEmitter<T = any> = (data?: T) => CustomEvent<T>;

export interface EventOptions {
  /**
   * A string custom event name to override the default.
   */
  name?: string;
  /**
   * A Boolean indicating whether the event bubbles up through the DOM or not. default is `false`.
   */
  bubbles?: boolean;
  /**
   * A Boolean indicating whether the event is cancelable. default is `false`.
   */
  cancelable?: boolean;
  /**
   * A Boolean value indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM. The default is false.
   */
  composed?: boolean;
}

export function Event<T = any>(options: EventOptions = {}) {
  return function (target: PlusElement, propertyKey: PropertyKey) {
    defineProperty(target, propertyKey, {
      get() {
        return (detail?: T): CustomEvent<T> => {
          options.bubbles ??= false;
          const name = options.name || String(propertyKey);
          const renamed = getConfig().event?.rename?.(name) || paramCase(name);
          const event = new CustomEvent(renamed, { ...options, detail });
          host(this).dispatchEvent(event)
          return event;
        };
      }
    });
  };
}
