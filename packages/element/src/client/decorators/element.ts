import { camelCase, paramCase } from 'change-case';

import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
import { call, getMembers, isServer, parseValue, request } from '../utils/index.js';
import * as uhtml from '../vendor/uhtml.js';

export function Element(tag?: string) {
  return function (constructor: PlusElement) {
    if (isServer()) return;

    const members = getMembers(constructor);

    class Plus extends HTMLElement {
      plus;

      constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // TODO
        this.plus = new (constructor as any)();
        this.plus[CONSTANTS.API_HOST] = () => this;
        this.plus['uhtml'] = uhtml;
        this.plus[CONSTANTS.API_STATUS] = 'initialize';
      }

      static get observedAttributes() {
        return Object.keys(members)
          .filter((key) => members[key][0] != CONSTANTS.TYPE_FUNCTION)
          .map((key) => paramCase(key));
      }

      adoptedCallback() {
        call(this.plus, CONSTANTS.LIFECYCLE_ADOPTED);
      }

      // TODO
      attributeChangedCallback(name, prev, next) {
        const key = camelCase(name);
        const [type] = members[key];
        const parsed = parseValue(next, type);
        this.plus[key] = parsed;
      }

      connectedCallback() {
        this.plus[CONSTANTS.API_STATUS] = 'connected';
        call(this.plus, CONSTANTS.LIFECYCLE_CONNECTED);
        request(this.plus)
          .then(() => {
            this.plus[CONSTANTS.API_STATUS] = 'loaded';
            call(this.plus, CONSTANTS.LIFECYCLE_LOADED);
          })
          .catch((error) => {
            throw error;
          });
      }

      disconnectedCallback() {
        this.plus[CONSTANTS.API_STATUS] = 'disconnected';
        call(this.plus, CONSTANTS.LIFECYCLE_DISCONNECTED);
      }
    }

    if (customElements.get(tag!)) return;

    customElements.define(tag!, Plus);
  };
}
