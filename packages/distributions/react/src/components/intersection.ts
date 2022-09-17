/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/intersection';
import type { PlusIntersectionJSX as Type } from '@htmlplus/core/types/components/intersection/intersection';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  onPlusChange: 'onChange',
}>

export const Intersection = proxy<HTMLPlusIntersectionElement, Renamed>(
  'plus-intersection', 
  ['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold', ], 
  ['plusChange', ],
);