import { useRouter as useRouterNext, NextRouter } from 'next/router';
import { router } from '@app/services';

interface RouterHook extends NextRouter {
  isActive(name: string, params?: object): boolean;
}

export const useRouter = (): RouterHook => {

  const nextRouter: RouterHook = useRouterNext() as RouterHook;

  nextRouter.isActive = (name: string, params?: object) => {

    const path = router.path(name, params);

    if (!path) return;

    return nextRouter.asPath.startsWith(path);
  };

  return nextRouter;
};
