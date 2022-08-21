// TODO

interface Options {
  event?: OptionsEvent;
}

interface OptionsEvent {
  dispatch?: (target: OptionsEventTarget, event: Event) => boolean;
}

type OptionsEventTarget = Window | Document | Element;

let options: Options = {};

export const getConfig = (): Options => {
  return options;
}

export const setConfig = (config: Options) => {
  options = config || {};
}