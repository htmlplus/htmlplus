import { getConfig } from './config.js';

type Target = Window | Document | Element;

export const dispatch = (target: Target, event: Event): boolean => {
  return getConfig().event?.dispatch?.(target, event) || target.dispatchEvent(event);
}

export const on = (
  target: Target,
  type: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): void => {
  target.addEventListener(type, handler, options);
};

export const off = (
  target: Target,
  type: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions
): void => {
  target.removeEventListener(type, handler, options);
};
