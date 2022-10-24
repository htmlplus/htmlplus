/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/avatar';
import type { AvatarJSX as AvatarJSX } from '@htmlplus/core/types/components/avatar/avatar';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<AvatarJSX, { 
}>

export const Avatar = proxy<HTMLPlusAvatarElement, Renamed>(
  'plus-avatar', 
  ['shape', 'size', ], 
  [],
);