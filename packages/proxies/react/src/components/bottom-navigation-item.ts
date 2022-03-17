/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/bottom-navigation-item/bottom-navigation-item';
import type { BottomNavigationItemJSX as Type } from '@htmlplus/core/dist/components/bottom-navigation-item/bottom-navigation-item';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const BottomNavigationItem = /*@__PURE__*/ proxy<HTMLBottomNavigationItemElement, Renamed>(
  'plus-bottom-navigation-item', 
  ['disabled', 'value', ], 
  [],
);