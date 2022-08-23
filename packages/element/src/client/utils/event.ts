export type Target = Window | Document | Element;

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
