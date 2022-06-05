import { ReactNode } from 'react';

import { Colors } from '@app/types';

export interface TextProps {
  align?: 'start' | 'left' | 'center' | 'right' | 'end' | 'justify';
  children?: ReactNode;
  color?: Colors;
  dense?: boolean;
  inline?: boolean;
  size?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | 'paragraph'
    | 'super'
    | 'header'
    | 'title'
    | 'subtitle'
    | 'body'
    | 'label'
    | 'caption';
  truncate?: boolean;
  weight?: 'auto' | 'normal' | 'semi-bold' | 'bold';
}
