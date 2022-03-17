/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/bottom-navigation/bottom-navigation';
import type { BottomNavigationJSX as Type } from '@htmlplus/components/dist/components/bottom-navigation/bottom-navigation';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusChange: 'onChange',
}>

export const BottomNavigation = /*@__PURE__*/ proxy<HTMLBottomNavigationElement, Renamed>(
  'plus-bottom-navigation', 
  ['grow', 'hideOnScroll', 'labelPosition', 'fixed', 'scrollTarget', 'scrollThreshold', 'shift', 'value', ], 
  ['plusChange', ],
);