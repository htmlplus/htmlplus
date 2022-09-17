/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/sticky';
import type { PlusStickyJSX as Type } from '@htmlplus/core/types/components/sticky/sticky';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  onPlusChange: 'onChange',
}>

export const Sticky = proxy<HTMLPlusStickyElement, Renamed>(
  'plus-sticky', 
  ['disabled', 'top', 'watcher', 'zIndex', ], 
  ['plusChange', ],
);