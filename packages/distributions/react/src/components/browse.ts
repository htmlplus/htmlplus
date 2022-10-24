/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/browse';
import type { BrowseJSX as BrowseJSX } from '@htmlplus/core/types/components/browse/browse';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<BrowseJSX, { 
  onPlusChange: 'onChange',
  onPlusError: 'onError',
  onPlusSuccess: 'onSuccess',
}>

export const Browse = proxy<HTMLPlusBrowseElement, Renamed>(
  'plus-browse', 
  ['accept', 'disabled', 'droppable', 'min', 'max', 'minSize', 'maxSize', 'multiple', ], 
  ['plusChange', 'plusError', 'plusSuccess', ],
);