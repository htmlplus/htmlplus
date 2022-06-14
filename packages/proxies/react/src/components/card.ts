/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/card';
import type { CardJSX as Type } from '@htmlplus/core/types/components/card/card';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const Card = /*@__PURE__*/ proxy<HTMLCardElement, Renamed>(
  'plus-card', 
  ['elevation', 'flat', 'outlined', 'tile', ], 
  [],
);