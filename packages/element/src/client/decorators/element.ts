import { camelCase, paramCase } from 'change-case';

import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
import { call, getMembersKey, getMemberType, isServer, parseValue, request } from '../utils/index.js';
import * as uhtml from '../vendor/uhtml.js';

export function Element(tag?: string) {
  return function (constructor: PlusElement) {
    if (isServer()) return;

    if (customElements.get(tag!)) return;

    const instances = new Map();
    class Plus extends HTMLElement {
      constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        // TODO
        const instance = new (constructor as any)();
        instances.set(this, instance);
        instance[CONSTANTS.API_HOST] = () => this;
        instance['uhtml'] = uhtml;
        instance[CONSTANTS.API_STATUS] = 'initialize';
      }

      static get observedAttributes() {
        // TODO: ignore functions
        return getMembersKey(constructor).map((key) => paramCase(key));
      }

      adoptedCallback() {
        const instance = instances.get(this);
        call(instance, CONSTANTS.LIFECYCLE_ADOPTED);
      }

      // TODO
      attributeChangedCallback(name, prev, next) {
        const instance = instances.get(this);
        const key = camelCase(name);
        const type = getMemberType(instance, key);
        const parsed = parseValue(next, type);
        instance[key] = parsed;
      }

      connectedCallback() {
        const instance = instances.get(this);
        instance[CONSTANTS.API_STATUS] = 'connected';
        call(instance, CONSTANTS.LIFECYCLE_CONNECTED);
        request(instance)
          .then(() => {
            instance[CONSTANTS.API_STATUS] = 'loaded';
            call(instance, CONSTANTS.LIFECYCLE_LOADED);
          })
          .catch((error) => {
            throw error;
          });
      }

      disconnectedCallback() {
        const instance = instances.get(this);
        instance[CONSTANTS.API_STATUS] = 'disconnected';
        call(instance, CONSTANTS.LIFECYCLE_DISCONNECTED);
      }
    }

    customElements.define(tag!, Plus);
  };
}
