/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/dialog';
import type { DialogJSX as DialogJSX } from '@htmlplus/core/types/components/dialog/dialog';

type Renamed = Rename<DialogJSX, { 
  onPlusClose: 'onClose',
  onPlusClosed: 'onClosed',
  onPlusOpen: 'onOpen',
  onPlusOpened: 'onOpened',
}>

export const Dialog = proxy<HTMLPlusDialogElement, Renamed>(
  'plus-dialog', 
  ['animation', 'backdrop', 'connector', 'fullHeight', 'fullWidth', 'fullscreen', 'keyboard', 'open', 'persistent', 'placement', 'portal', 'portalStrategy', 'portalTarget', 'scrollable', 'size', 'sticky', ], 
  ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened', ],
);