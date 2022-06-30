export const eventPath = (event: Event): Array<Element> => {
  return event.composedPath?.() ?? event['path'];
};
