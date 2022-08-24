/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dialog';
import type { PlusDialogJSX as Type } from '@htmlplus/core/types/components/dialog/dialog';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusClose: 'onClose',
  plusClosed: 'onClosed',
  plusOpen: 'onOpen',
  plusOpened: 'onOpened',
}>

export const Dialog = proxy<HTMLPlusDialogElement, Renamed>(
  'plus-dialog', 
  ['animation', 'backdrop', 'connector', 'fullHeight', 'fullWidth', 'fullscreen', 'keyboard', 'open', 'persistent', 'placement', 'portal', 'portalStrategy', 'portalTarget', 'scrollable', 'size', 'sticky', ], 
  ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened', ],
);