/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/ripple/ripple';
import type { RippleJSX as Type } from '@htmlplus/components/dist/components/ripple/ripple';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const Ripple = /*@__PURE__*/ proxy<HTMLRippleElement, Renamed>(
  'plus-ripple', 
  [], 
  [],
);