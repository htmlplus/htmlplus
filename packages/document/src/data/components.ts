import document from '@htmlplus/core/document.json';

// @ts-ignore
export const components: any[] = document.components.map((component) => ({
  ...component,
  // TODO
  key: component.tag.replace('plus-', '')
}));
