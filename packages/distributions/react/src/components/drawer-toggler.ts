/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/drawer-toggler';
import type { DrawerTogglerJSX as Type } from '@htmlplus/core/types/components/drawer-toggler/drawer-toggler';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const DrawerToggler = /*@__PURE__*/ proxy<HTMLDrawerTogglerElement, Renamed>(
  'plus-drawer-toggler', 
  ['connector', ], 
  [],
);