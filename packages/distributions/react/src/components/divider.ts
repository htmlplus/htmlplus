/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/divider';
import type { DividerJSX as DividerJSX } from '@htmlplus/core/types/components/divider/divider';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<DividerJSX, { 
}>

export const Divider = proxy<HTMLPlusDividerElement, Renamed>(
  'plus-divider', 
  ['placement', 'type', 'variant', 'vertical', 'width', ], 
  [],
);