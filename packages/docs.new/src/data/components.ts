import docs from '@htmlplus/core/docs.json';

// @ts-ignore
export const components = docs.components.map((component) => ({
  ...component,
  // TODO
  key: component.tag.replace('plus-', '')
}));
