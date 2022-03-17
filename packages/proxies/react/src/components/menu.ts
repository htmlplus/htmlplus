/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/menu/menu';
import type { MenuJSX as Type } from '@htmlplus/core/dist/components/menu/menu';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusClose: 'onClose',
}>

export const Menu = /*@__PURE__*/ proxy<HTMLMenuElement, Renamed>(
  'plus-menu', 
  ['alignX', 'alignY', 'fixed', 'growX', 'growY', 'offsetX', 'offsetY', 'open', 'persistent', 'trigger', ], 
  ['plusClose', ],
);