/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/drawer';
import type { DrawerJSX } from '@htmlplus/core/types/components/drawer/drawer';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  DrawerJSX,
  {
    onPlusClose: 'onClose';
    onPlusClosed: 'onClosed';
    onPlusOpen: 'onOpen';
    onPlusOpened: 'onOpened';
  }
>;

export const Drawer = proxy<HTMLPlusDrawerElement, Renamed>(
  'plus-drawer',
  [
    'animation',
    'backdrop',
    'breakpoint',
    'connector',
    'mini',
    'miniSize',
    'open',
    'persistent',
    'placement',
    'flexible',
    'size',
    'temporary'
  ],
  ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']
);
