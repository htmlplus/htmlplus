import React from 'react';
import * as Utils from '@app/utils';
import { AlertProps } from './alert.types';

export const Alert: React.FC<AlertProps> = (props) => {

  const { children, type } = props;

  const classes = Utils.classes(
    'alert',
    { type }
  );

  return <div className={classes}>{children}</div>;
};
