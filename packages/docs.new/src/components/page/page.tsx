import React, { useEffect } from 'react';
import { useStore } from '@app/hooks';
import { PageProps } from './page.types';

export const Page: React.FC<PageProps> = (props) => {

  const { children, layout } = props;

  const store = useStore();

  useEffect(
    () => {
      store.ui.setLayout(layout);
    },
    [layout]
  );

  return <>{children}</>;
};
