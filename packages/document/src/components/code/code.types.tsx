import { ReactNode } from 'react';

export interface CodeProps {
  children?: ReactNode;
  copy?: boolean;
  language: 'html' | 'css' | 'js' | 'jsx' | 'shell';
}
