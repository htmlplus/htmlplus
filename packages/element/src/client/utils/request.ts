import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';
import { call } from '../utils/call';
import { task } from '../utils/task';
import { html, render } from '../vendor/uhtml.js';
import { getStyles } from './getStyles.js';
import { host } from './host.js';

const targets = new Map();

export const request = (target: PlusElement, state?: { [key: string]: [any, any, boolean?] }): Promise<boolean> => {
  let run = targets.get(target);
  if (run) return run(state);
  run = task({
    canStart: (states, state) => {
      return /* hasChange */ true;
    },
    canRun: (states) => {
      return /* shouldUpdate */ true;
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
  targets.set(target, run);
  return run(state);
};
