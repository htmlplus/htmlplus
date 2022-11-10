import { ReactNode } from 'react';

import { Colors } from '@app/types';

export interface ButtonProps {
  block?: boolean;
  children: ReactNode;
  color?: Colors;
  disabled?: boolean;
  icon?: boolean;
  link?: boolean | 'underline';
  loading?: boolean;
  outlined?: boolean;
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  text?: boolean;
  title?: string;
  to?: string;
  onClick?: any;
}
