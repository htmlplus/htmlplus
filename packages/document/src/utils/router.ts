import * as Constants from '@app/constants';
import { ROUTE } from '@app/types';

export const getPath = (route: ROUTE, params?: any): string | undefined => {
  let url: string = Constants.ROUTE[route];
  if (!url) return;
  const keys = Object.keys(params || {});
  for (const key of keys) url = url.replace(`[${key}]`, params[key]);
  return url;
};

export const getPath2 = (route: string, params?: any): string | undefined => {
  let url: string = route;
  if (!url) return;
  const keys = Object.keys(params || {});
  for (const key of keys) url = url.replace(`[${key}]`, params[key]);
  return url;
};
