// TODO

export const getExampleCodeSandboxLink = (frameworkKey: string, componentKey: string, exampleKey: string): string => {
  return `https://codesandbox.io/s/github/htmlplus/htmlplus/tree/main/packages/examples/src/${componentKey}/${exampleKey}/${frameworkKey}`;
};

export const getExampleDownloadLink = (frameworkKey: string, componentKey: string, exampleKey: string): string => {
  return `https://minhaskamal.github.io/DownGit/#/home?url=${getExampleGithubLink(
    frameworkKey,
    componentKey,
    exampleKey
  )}`;
};

export const getExampleGithubLink = (frameworkKey: string, componentKey: string, exampleKey: string): string => {
  return `https://github.com/htmlplus/htmlplus/tree/main/packages/examples/src/${componentKey}/${exampleKey}/${frameworkKey}`;
};

export const getTypeGithubLink = (componentKey: string, fileName: string): string => {
  return `https://github.com/htmlplus/htmlplus/tree/main/packages/core/src/components/${componentKey}/${fileName.slice(
    2
  )}.ts`;
};
