import React from 'react';
import * as Utils from '@app/utils';
import { TextProps } from './text.types';

export const Text: React.FC<TextProps> = (props) => {

  const {
    align = 'start',
    children,
    color,
    dense,
    inline,
    size = 'body',
    truncate,
    weight = 'normal'
  } = props;

  const classes = Utils.classes(
    'text',
    { align, color, dense, inline, size, truncate, weight }
  );

  let Tag;

  switch (size) {

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
      Tag = `h${size}` as any;
      break;

    case 'paragraph':
      Tag = 'p' as any;
      break;

    default:
      Tag = 'div' as any;
      break;
  }

  return (
    <Tag
      className={classes}
      title={truncate ? children : undefined}
    >
      {children}
    </Tag>
  );
};
