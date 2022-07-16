/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/aspect-ratio';
import type { PlusAspectRatioJSX as Type } from '@htmlplus/core/types/components/aspect-ratio/aspect-ratio';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const AspectRatio = /*@__PURE__*/ proxy<HTMLPlusAspectRatioElement, Renamed>(
  'plus-aspect-ratio', 
  ['value', ], 
  [],
);