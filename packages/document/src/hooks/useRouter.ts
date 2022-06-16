import { useRouter as useRouterNext, NextRouter } from 'next/router';

import * as Constants from '@app/constants';

interface RouterHook extends NextRouter {
  find(name: string): string | undefined;
  isActive(name: string, params?: object): boolean;
  getPath(name: string, params?: object): string | undefined;
}

export const useRouter = (): RouterHook => {
  const router = useRouterNext();

  const find = (name: string): string | undefined => {
    return (Constants.ROUTE as any)[name];
  };

  const isActive = (name: string, params?: any): boolean => {
    const route = getPath(name, params);
    if (!route) return false;
    return router.asPath.startsWith(route);
  };

  const getPath = (name: string, params?: any): string | undefined => {
    const route = find(name);
    if (!route) return;
    let path = route;
    Object.keys(params || {}).forEach((key) => {
      path = path.replace(`[${key}]`, params[key]);
    });
    return path;
  };

  return {
    ...router,
    find,
    getPath,
    isActive
  };
};
