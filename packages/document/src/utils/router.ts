const ROUTES = {
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
  CODEOFCONDUCT: '/code-of-conduct'
} as const;

type ROUTE = keyof typeof ROUTES;

export const getPath = (route: ROUTE, params?: any): string | undefined => {
  let url: string = (ROUTES as any)[route] ?? route;
  if (!url) return;
  const keys = Object.keys(params || {});
  for (const key of keys) url = url.replace(`[${key}]`, params[key]);
  return url;
};
