// TODO
export const getTypeFromGithub = (componentKey: string, file: string): string => {
  return `https://github.com/htmlplus/dev/blob/main/packages/core/src/components/${componentKey}/${file.slice(2)}.ts`;
};
