import React from 'react';
import * as Utils from '@app/utils';
import { IconProps } from './icon.types';

export const Icon: React.FC<IconProps> = (props) => {

  const { color, name, size = 'sm' } = props;

  const classes = Utils.classes(
    'icon',
    {
      [name]: !!name,
      color,
      size
    }
  );

  return <i className={classes} />;
};
