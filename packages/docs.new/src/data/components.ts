import docs from '@htmlplus/react/dist/json/docs.json';

// @ts-ignore
export const components = docs.components.filter((component) => !component.development || process.env.NODE_ENV === 'development');