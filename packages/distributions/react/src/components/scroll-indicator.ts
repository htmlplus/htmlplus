/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/scroll-indicator';
import type { PlusScrollIndicatorJSX as Type } from '@htmlplus/core/types/components/scroll-indicator/scroll-indicator';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusScroll: 'onScroll',
}>

export const ScrollIndicator = /*@__PURE__*/ proxy<HTMLPlusScrollIndicatorElement, Renamed>(
  'plus-scroll-indicator', 
  ['disabled', 'source', ], 
  ['plusScroll', ],
);