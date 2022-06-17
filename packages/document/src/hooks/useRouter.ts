import { useRouter as useRouterNext, NextRouter } from 'next/router';

import * as Constants from '@app/constants';
import { ROUTE } from '@app/types';

interface RouterHook extends NextRouter {
  get(route: ROUTE, params?: any): string | undefined;
  isActive(name: string, params?: object): boolean;
}

export const useRouter = (): RouterHook => {
  const router = useRouterNext();

  const get = (route: ROUTE, params?: any): string | undefined => {
    let url: string = Constants.ROUTE[route];
    if (!url) return;
    const keys = Object.keys(params || {});
    for (const key of keys) url = url.replace(`[${key}]`, params[key]);
    return url;
  };

  const isActive = (route: ROUTE, params?: any): boolean => {
    const url = get(route, params);
    return !!url && !!router.asPath.startsWith(url);
  };

  return {
    ...router,
    get,
    isActive
  };
};
