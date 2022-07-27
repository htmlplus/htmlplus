/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/counter';
import type { PlusCounterJSX as Type } from '@htmlplus/core/types/components/counter/counter';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusComplete: 'onComplete',
}>

export const Counter = /*@__PURE__*/ proxy<HTMLPlusCounterElement, Renamed>(
  'plus-counter', 
  ['easing', 'decimal', 'decimalPlaces', 'delay', 'duration', 'from', 'play', 'separator', 'to', ], 
  ['plusComplete', ],
);