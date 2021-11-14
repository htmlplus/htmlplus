import josn from '@htmlplus/react/dist/docs.json';

// @ts-ignore
export const components = josn.filter((component) => !component.development || process.env.NODE_ENV === 'development');
