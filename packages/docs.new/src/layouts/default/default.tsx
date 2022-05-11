import React, { ReactNode } from 'react';

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return <div>{children}</div>;
};
