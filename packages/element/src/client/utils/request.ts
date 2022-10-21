import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { call } from '../utils/call.js';
import { task } from '../utils/task.js';
import { html, render } from '../vendors/uhtml.js';
import { getStyles } from './getStyles.js';
import { host } from './host.js';
import { shadowRoot } from './shadowRoot.js';
import { updateAttribute } from './updateAttribute.js';

export const request = (target: PlusElement, name?: string, value?: any, options?) => {
  const states = (target[CONSTANTS.STATES] ||= new Map<string, any>());

  name && states.set(name, { value, options });

  target[CONSTANTS.REQUEST] ||= task({
    run: () => {
      call(target, CONSTANTS.LIFECYCLE_UPDATE, states);

      render(shadowRoot(target), () => {
        const markup = call(target, CONSTANTS.METHOD_RENDER);
        const styles = getStyles(target);
        if (!styles) return markup;
        return html`<style>${styles}</style>${markup}`;
      });

      target[CONSTANTS.ATTRIBUTE_CHANGED_CALLBACK] = true;
      states.forEach((value, key) => {
        if (!value?.options?.reflect) return;
        updateAttribute(host(target), key, target[key]);
      });
      target[CONSTANTS.ATTRIBUTE_CHANGED_CALLBACK] = false;

      if (!target[CONSTANTS.LOADED]) {
        target[CONSTANTS.LOADED] = true;
        call(target, CONSTANTS.LIFECYCLE_LOADED, states);
      }

      call(target, CONSTANTS.LIFECYCLE_UPDATED, states);

      states.clear();
    }
  });

  return call(target, CONSTANTS.REQUEST);
};
