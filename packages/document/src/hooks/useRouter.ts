import { useRouter as useRouterNext, NextRouter } from 'next/router';

import * as Constants from '@app/constants';

interface Route {
  name: string;
  path: string;
}

interface RouterHook extends NextRouter {
  find(name: string): Route | undefined;
  isActive(name: string, params?: object): boolean;
  path(name: string, params?: object): string | undefined;
}

export const useRouter = (): RouterHook => {
  const routes = Constants.ROUTES;

  const router = useRouterNext();

  const find = (name: string): Route | undefined => {
    return routes.find((item) => item.name === name);
  };

  const isActive = (name: string, params?: object): boolean => {
    const p = path(name, params);
    if (!p) return false;
    return router.asPath.startsWith(p);
  };

  const path = (name: string, params?: any): string | undefined => {
    const route = find(name);
    if (!route) return;
    let path = route.path;
    Object.keys(params || {}).forEach((key) => {
      path = path.replace(`[${key}]`, params[key]);
    });
    return path;
  };

  return {
    ...router,
    find,
    isActive,
    path
  };
};
