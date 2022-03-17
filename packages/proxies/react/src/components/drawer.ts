/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/drawer/drawer';
import type { DrawerJSX as Type } from '@htmlplus/core/dist/components/drawer/drawer';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusClose: 'onClose',
  plusClosed: 'onClosed',
  plusOpen: 'onOpen',
  plusOpened: 'onOpened',
}>

export const Drawer = /*@__PURE__*/ proxy<HTMLDrawerElement, Renamed>(
  'plus-drawer', 
  ['animation', 'backdrop', 'breakpoint', 'connector', 'mini', 'miniSize', 'open', 'persistent', 'placement', 'flexible', 'size', 'temporary', ], 
  ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened', ],
);