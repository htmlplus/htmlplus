// TODO

export const getExampleFromGithub = (frameworkKey: string, componentKey: string, exampleKey: string): string => {
  return `https://github.com/htmlplus/htmlplus/tree/main/packages/examples/src/${componentKey}/${exampleKey}/${frameworkKey}`;
};

export const getTypeFromGithub = (componentKey: string, fileName: string): string => {
  return `https://github.com/htmlplus/htmlplus/blob/main/packages/core/src/components/${componentKey}/${fileName.slice(
    2
  )}.ts`;
};