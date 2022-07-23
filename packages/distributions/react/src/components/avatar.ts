/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/avatar';
import type { PlusAvatarJSX as Type } from '@htmlplus/core/types/components/avatar/avatar';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const Avatar = /*@__PURE__*/ proxy<HTMLPlusAvatarElement, Renamed>(
  'plus-avatar', 
  ['shape', 'size', ], 
  [],
);