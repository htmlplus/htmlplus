/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/avatar-group';
import type { PlusAvatarGroupJSX as Type } from '@htmlplus/core/types/components/avatar-group/avatar-group';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const AvatarGroup = /*@__PURE__*/ proxy<HTMLPlusAvatarGroupElement, Renamed>(
  'plus-avatar-group', 
  ['hoverable', 'stacked', ], 
  [],
);