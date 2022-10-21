import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';
import { call } from '../utils/call.js';
import { task } from '../utils/task.js';
import { html, render } from '../vendors/uhtml.js';
import { getStyles } from './getStyles.js';
import { shadowRoot } from './shadowRoot.js';

export const request = (target: PlusElement, name?: string, previous?: any, callback?: Function) => {
  const stacks = (target[CONSTANTS.API_STACKS] ||= new Map());

  const stack = stacks.get(name) || { callbacks: [], previous };

  callback && stack.callbacks.push(callback);

  stacks.set(name, stack);

  target[CONSTANTS.API_REQUEST] ||= task({
    run: () => {
      const states = new Map(
        Array.from(stacks)
          .filter((stack: any) => stack[0])
          .map((stack: any) => [stack[0], stack[1].previous])
      );

      call(target, CONSTANTS.LIFECYCLE_UPDATE, states);

      target[CONSTANTS.API_IS_RENDERING] = true;

      render(shadowRoot(target), () => {
        const markup = call(target, CONSTANTS.METHOD_RENDER);
        const styles = getStyles(target);
        if (!styles) return markup;
        return html`<style>${styles}</style>${markup}`;
      });

      stacks.forEach((state) => {
        state.callbacks.forEach((callback, index, callbacks) => {
          callback(callbacks.length - 1 != index);
        });
      });

      target[CONSTANTS.API_IS_RENDERING] = false;

      call(target, CONSTANTS.LIFECYCLE_UPDATED, states);

      stacks.clear();
    }
  });

  return call(target, CONSTANTS.API_REQUEST);
};
