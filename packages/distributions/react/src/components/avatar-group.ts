/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/avatar-group';
import type { AvatarGroupJSX as AvatarGroupJSX } from '@htmlplus/core/types/components/avatar-group/avatar-group';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<AvatarGroupJSX, { 
}>

export const AvatarGroup = proxy<HTMLPlusAvatarGroupElement, Renamed>(
  'plus-avatar-group', 
  ['hoverable', 'stacked', ], 
  [],
);