/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/spinner/spinner';
import type { SpinnerJSX as Type } from '@htmlplus/core/dist/components/spinner/spinner';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const Spinner = /*@__PURE__*/ proxy<HTMLSpinnerElement, Renamed>(
  'plus-spinner', 
  ['size', 'type', ], 
  [],
);