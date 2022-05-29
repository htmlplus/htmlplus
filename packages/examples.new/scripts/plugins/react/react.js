import { __dirname, renderTemplate } from '@htmlplus/element/compiler/utils/index.js';

export const react = () => {
  const name = "react";
  const next = (context) => {
    const config = { cwd: __dirname(import.meta.url) };
    const patterns = ['templates/**/*.*'];
    renderTemplate(patterns, 'src/aspect-ratio/default/react', config)({});
  };
  return {
    name,
    next,
  };
};
