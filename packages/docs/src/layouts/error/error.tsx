import React from 'react';
import { PlusLayout } from '@app/components';

export const LayoutError: React.FC = (props) => {

  const { children } = props;

  return (
    <PlusLayout main="center">
      {children}
    </PlusLayout >
  );
};
