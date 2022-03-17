/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/switch/switch';
import type { SwitchJSX as Type } from '@htmlplus/components/dist/components/switch/switch';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusChange: 'onChange',
}>

export const Switch = /*@__PURE__*/ proxy<HTMLSwitchElement, Renamed>(
  'plus-switch', 
  ['checked', 'disabled', 'inset', 'reverse', ], 
  ['plusChange', ],
);