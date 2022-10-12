import { camelCase, paramCase } from 'change-case';

import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { call, getMembersKey, getMemberType, isServer, parseValue, request } from '../utils/index.js';

export function Element(tag?: string) {
  return function (constructor: PlusElement) {
    if (isServer()) return;

    if (customElements.get(tag!)) return;

    class Plus extends HTMLElement {
      constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        // TODO
        this[CONSTANTS.API_INSTANCE] = new (constructor as any)();
        this[CONSTANTS.API_INSTANCE][CONSTANTS.API_HOST] = () => this;
        this[CONSTANTS.API_INSTANCE][CONSTANTS.API_STATUS] = 'initialize';
      }

      // TODO: ignore functions
      static get observedAttributes() {
        return getMembersKey(constructor).map((key) => paramCase(key));
      }

      adoptedCallback() {
        call(this[CONSTANTS.API_INSTANCE], CONSTANTS.LIFECYCLE_ADOPTED);
      }

      // TODO
      attributeChangedCallback(name, prev, next) {
        const key = camelCase(name);
        const type = getMemberType(this[CONSTANTS.API_INSTANCE], key);
        const parsed = parseValue(next, type);
        this[CONSTANTS.API_INSTANCE][key] = parsed;
      }

      connectedCallback() {
        this[CONSTANTS.API_INSTANCE][CONSTANTS.API_STATUS] = 'connected';
        call(this[CONSTANTS.API_INSTANCE], CONSTANTS.LIFECYCLE_CONNECTED);
        request(this[CONSTANTS.API_INSTANCE])
          .then(() => {
            this[CONSTANTS.API_INSTANCE][CONSTANTS.API_STATUS] = 'loaded';
            call(this[CONSTANTS.API_INSTANCE], CONSTANTS.LIFECYCLE_LOADED);
          })
          .catch((error) => {
            throw error;
          });
      }

      disconnectedCallback() {
        this[CONSTANTS.API_INSTANCE][CONSTANTS.API_STATUS] = 'disconnected';
        call(this[CONSTANTS.API_INSTANCE], CONSTANTS.LIFECYCLE_DISCONNECTED);
      }
    }

    customElements.define(tag!, Plus);
  };
}
