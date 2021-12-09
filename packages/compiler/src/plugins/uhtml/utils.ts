import { html, render } from 'uhtml';
import * as CONSTANTS from '../../configs/constants.js';
import { isServer } from '../../utils/is-server.js';
import { toBoolean } from '../../utils/to-boolean.js';

// TODO
export { html, render } from 'uhtml';

// TODO: input type
export const define = (name: string, Class: any) => {

  if (isServer()) return;

  customElements.define(name, Class);
};

// TODO: input type
export const proxy = (Class: any) => {

  if (isServer()) return class { };

  let instance, update;

  const getValue = (key, value) => {

    const [, type] = Class.members.find((property) => property[0] == key);

    switch (type) {

      case 'boolean':
        return toBoolean(value);

      case 'number':
        return parseFloat(value);

      default:
        return value;
    }
  }

  return class extends HTMLElement {

    constructor() {

      super();

      instance = new Class();

      instance.$api = {
        ready: false,
        host: () => this,
        property: (name, value, options: any = {}) => {

          const raw = this.getAttribute(name);

          const parsed = getValue(name, raw);

          if (parsed === value) return;

          // if (options.reflect)
          //     updateAttribute(this, name, value);

          this.render();
        },
        state: () => this.render()
      };

      for (const [key] of Class.members) {

        // TODO: methods.bind(instance)
        Object.defineProperty(
          this,
          key,
          {
            get: () => instance[key],
            set: (value) => { instance[key] = value }
          }
        )
      }

      this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
      return Class
        .members
        .filter(([, type]) => type != 'method')
        .map(([key]) => key);
    }

    attributeChangedCallback(name, prev, next) {

      instance[name] = getValue(name, next);

      if (!instance.$api.ready) return;

      this.render();
    }

    connectedCallback() {

      // update = sync(this, {});

      instance[CONSTANTS.TOKEN_LIFECYCLE_MOUNT] && instance[CONSTANTS.TOKEN_LIFECYCLE_MOUNT]();

      this.render();

      // TODO
      instance['loaded'] && instance['loaded']();

      instance.$api.ready = true;
    }

    disconnectedCallback() {
      instance[CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT] && instance[CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT]();
    }

    render() {
      render(
        this.shadowRoot as any,
        () => {
          if (!Class.styles) return instance.render();
          return html`
              <style>
              ${Class.styles}
              </style>
              ${instance.render()}
          `
        }
      )
    }
  }
}