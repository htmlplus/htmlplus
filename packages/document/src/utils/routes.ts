type ExtractOptional<Key extends string> = Key extends `${infer Start}?`
  ? true
  : Key extends `${infer Start}?${infer End}`
  ? true
  : false;

type ExtractParam<Key extends string> = ExtractOptional<Key> extends true
  ? Partial<ExtractRecord<Key>>
  : ExtractRecord<Key>;

type ExtractParamKey<Key extends string> = Key extends `${infer Start}?${infer End}`
  ? Start
  : Key extends `${infer Start}:${infer End}`
  ? Start
  : Key;

type ExtractParamType<Key extends string> = Key extends `${infer Start}:boolean`
  ? boolean
  : Key extends `${infer Start}:number`
  ? number
  : string;

type ExtractRecord<Key extends string> = Record<ExtractParamKey<Key>, ExtractParamType<Key>>;

export type ExtractParams<Input extends string> = Input extends `${infer Start}[${infer Key}]${infer End}`
  ? ExtractParam<Key> & ExtractParams<End>
  : {};

export type ExtractKey<T> = T[keyof T];

export const getPathCore = (key: string, params: any) => {
  key = key.replace(/\[(\w+)(\?)?(:)?(\w+)?\]/g, '[$1$2]');

  for (const param in params) {
    const value = params[param];
    key = key.replace(`[${param}]`, value).replace(`[${param}?]`, value);
  }

  key = key
    .replace(/\/\[(\w+)\?\]/g, '')
    .replace(/\w+=\[\w+(\?)\]/g, '')
    .replace(/(\?|&)+$/, '');

  return key;
};

export const ROUTES = {
  HOME: '/',
  ANIMATIONS: '/component/animation/names',
  BIDIRECTIONALITY: '/bidirectionality',
  INTRODUCTION_WHAT: `/introduction/what-is-htmlplus`,
  INTRODUCTION_WHY: `/introduction/why-htmlplus`,
  INSTALLATION: '/installation',
  INSTALLATION_FRAMEWORK: '/[framework]/installation',
  BROWSERS: '/browsers',
  COMPONENT_DETAILS: '/[framework]/component/[component]',
  API_DETAILS: '/[framework]/api/[component]',
  CODEOFCONDUCT: '/code-of-conduct',
  EXAMPLE_CODE_SANDBOX_LINK:
    'https://codesandbox.io/s/github/htmlplus/htmlplus/tree/main/packages/examples/src/[component]/[example]/[framework]',
  EXAMPLE_GITHUB_LINK:
    'https://github.com/htmlplus/htmlplus/tree/main/packages/examples/src/[component]/[example]/[framework]',
  EXAMPLE_DOWNLOAD_LINK:
    'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/htmlplus/htmlplus/tree/main/packages/examples/src/[component]/[example]/[framework]',
  TYPE_GITHUB_LINK: 'https://github.com/htmlplus/htmlplus/tree/main/packages/core/src/components/[component]/[fileName]'
} as const;

export const getPath = <K extends ExtractKey<typeof ROUTES>, P extends ExtractParams<K>>(
  key: K,
  params: P = {} as any
) => getPathCore(key, params);
