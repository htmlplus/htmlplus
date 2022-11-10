import * as Utils from '@app/utils';

import { AlertProps } from './alert.types';

export const Alert = ({ children, type }: AlertProps) => {
  const classes = Utils.classes('alert', { type });
  return <div className={classes}>{children}</div>;
};
