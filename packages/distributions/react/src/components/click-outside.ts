/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/click-outside';
import type { PlusClickOutsideJSX as Type } from '@htmlplus/core/types/components/click-outside/click-outside';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusClickOutside: 'onClickOutside',
}>

export const ClickOutside = proxy<HTMLPlusClickOutsideElement, Renamed>(
  'plus-click-outside', 
  ['disabled', 'once', ], 
  ['plusClickOutside', ],
);