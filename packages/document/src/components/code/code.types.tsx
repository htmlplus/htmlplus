import { ReactNode } from 'react';

export interface CodeProps {
  children?: ReactNode;
  language: 'html' | 'css' | 'js' | 'jsx' | 'shell';

  // TODO
  copy?: boolean;
  tile?: boolean;
}
