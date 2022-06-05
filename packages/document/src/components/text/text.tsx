import React from 'react';

import * as Utils from '@app/utils';

import { TextProps } from './text.types';

export const Text = ({
  align = 'start',
  children,
  color,
  dense,
  inline,
  size = 'body',
  truncate,
  weight = 'normal'
}: TextProps) => {
  const classes = Utils.classes('text', { align, color, dense, inline, size, truncate, weight });

  const Tag = (() => {
    switch (size) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        return `h${size}` as any;
      case 'paragraph':
        return 'p' as any;
      default:
        return 'div' as any;
    }
  })();

  return <Tag className={classes}>{children}</Tag>;
};
