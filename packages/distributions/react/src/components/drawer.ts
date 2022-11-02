/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/drawer';
import type { DrawerJSX as DrawerJSX } from '@htmlplus/core/types/components/drawer/drawer';

type Renamed = Rename<DrawerJSX, { 
  onPlusClose: 'onClose',
  onPlusClosed: 'onClosed',
  onPlusOpen: 'onOpen',
  onPlusOpened: 'onOpened',
}>

export const Drawer = proxy<HTMLPlusDrawerElement, Renamed>(
  'plus-drawer', 
  ['animation', 'backdrop', 'breakpoint', 'connector', 'mini', 'miniSize', 'open', 'persistent', 'placement', 'flexible', 'size', 'temporary', ], 
  ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened', ],
);