import React from 'react';
import * as Utils from '@app/utils';
import { BoxProps } from './box.types';

export const Box: React.FC<BoxProps> = (props) => {

  const { children, width, minWidth, maxWidth, style, ...all } = props;

  const classes = Utils.classes('box', all);

  const styles = {
    width: Utils.toUnit(width),
    minWidth: Utils.toUnit(minWidth),
    maxWidth: Utils.toUnit(maxWidth),
    ...style
  }

  return <div className={classes} style={styles}>{children}</div>;
};
