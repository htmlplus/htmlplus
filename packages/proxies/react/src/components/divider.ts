/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/divider/divider';
import type { DividerJSX as Type } from '@htmlplus/core/dist/components/divider/divider';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const Divider = /*@__PURE__*/ proxy<HTMLDividerElement, Renamed>(
  'plus-divider', 
  ['size', 'type', 'vertical', ], 
  [],
);