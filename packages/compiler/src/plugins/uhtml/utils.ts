import { html, render } from 'uhtml';
import { isServer } from '../../utils/is-server.js';
import { toBoolean } from '../../utils/to-boolean.js';

// TODO
export * from 'uhtml';

// TODO: input type
export const define = (name: string, Class: any) => {

  if (isServer()) return;

  customElements.define(name, Class);
};

// TODO: input type
export const proxy = (Class: any) => {

  if (isServer()) return class { };

  let instance, update;

  const flush = () => {

    // update(instance.attributes || {});

    // patch(
    //     instance.$api.host().shadowRoot,
    //     () => {
    //         elementOpen('style');
    //         text(style);
    //         elementClose('style');
    //         instance.render && instance.render();
    //     }
    // )
  }

  const getValue = (key, value) => {

    const [, type] = Class.properties.find((property) => property[0] == key);

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

          flush();
        },
        state: () => flush()
      };

      for (const [key] of Class.properties) {

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

    // TODO
    static get observedAttributes() {
      return []
      // return Class
      //   .properties
      //   .filter(([, type]) => type != 'method')
      //   .map(([key]) => key);
    }

    attributeChangedCallback(name, prev, next) {

      instance[name] = getValue(name, next);

      if (!instance.$api.ready) return;

      flush();
    }

    connectedCallback() {

      // update = sync(this, {});

      flush();

      instance.mount && instance.mount();

      instance.$api.ready = true;
    }

    disconnectedCallback() {
      instance.unmount && instance.unmount();
    }

    render() {
      render(
        this.shadowRoot as any,
        () => {

          if (!Class.styles) return html`${instance.render()}`;

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