import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { call } from '../utils/call.js';
import { task } from '../utils/task.js';
import { html, render } from '../vendors/uhtml.js';
import { getStyles } from './getStyles.js';
import { host } from './host.js';

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
      const element = host(target);
      render(element.shadowRoot!, () => {
        const markup = call(target, CONSTANTS.METHOD_RENDER);
        const styles = getStyles(target);
        if (!styles && !markup) return html``;
        if (!styles) return markup;
        if (!markup) return html`<style>${styles}</style>`;
        return html`<style>${styles}</style>${markup}`;
      });
      call(target, CONSTANTS.LIFECYCLE_UPDATED, states);
    }
  });
  return target[CONSTANTS.REQUEST](state);
};
