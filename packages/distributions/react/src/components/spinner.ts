/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/spinner';
import type { SpinnerJSX as SpinnerJSX } from '@htmlplus/core/types/components/spinner/spinner';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<SpinnerJSX, { 
}>

export const Spinner = proxy<HTMLPlusSpinnerElement, Renamed>(
  'plus-spinner', 
  ['size', 'type', ], 
  [],
);