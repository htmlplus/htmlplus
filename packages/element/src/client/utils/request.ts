import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { call } from '../utils/call.js';
import { task } from '../utils/task.js';
import { html, render } from '../vendors/uhtml.js';
import { getStyles } from './getStyles.js';
import { shadowRoot } from './shadowRoot.js';

export const request = (target: PlusElement, state?: { [key: string]: [any, any] }): Promise<boolean> => {
  target[CONSTANTS.REQUEST] ||= task({
    canStart: (states, state) => {
      // TODO: hasChange
      return true;
    },
    canRun: (states) => {
      // TODO: shouldUpdate
      return true;
    },
    run: (states) => {
      call(target, CONSTANTS.LIFECYCLE_UPDATE, states);
      render(shadowRoot(target), () => {
        const markup = call(target, CONSTANTS.METHOD_RENDER) || html``;
        const styles = getStyles(target);
        if (!styles) return markup;
        return html`<style>${styles}</style>${markup}`;
      });
      call(target, CONSTANTS.LIFECYCLE_UPDATED, states);
    }
  });
  return target[CONSTANTS.REQUEST](state);
};
