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

type ExtractParams<Input extends string> = Input extends `${infer Start}[${infer Key}]${infer End}`
  ? ExtractParam<Key> & ExtractParams<End>
  : {};

type ExtractKey<T> = T[keyof T];

const getPathCore = (key: string, params: any) => {
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
  GITHUB_URL: 'https://github.com/htmlplus/htmlplus',
  ASSETS: '/assets/[filepath]',
  CONTRIBUTOR: 'https://github.com/[contributor].png?size=90',
  CONTRIBUTOR_GITHUB: 'https://github.com/[contributor]',
  SOCIAL_TWITTER: 'https://www.twitter.com/htmlplusio',
  SOCIAL_LINKEDIN: 'https://www.linkedin.com/company/htmlplus',
  SOCIAL_INSTAGRAM: 'https://www.instagram.com/htmlplus.io',
  SOCIAL_GITHUB: 'https://github.com/htmlplus/htmlplus',
  SOCIAL_YOUTUBE: 'https://www.youtube.com/channel/UCsNkxDmLU7vK_L1jgSVWWCA',
  GITHUB_COMMITS: 'https://api.github.com/repos/htmlplus/htmlplus/commits?path=[path]',
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
