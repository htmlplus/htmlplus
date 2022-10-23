/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/switch';
import type { SwitchJSX as SwitchJSX } from '@htmlplus/core/types/components/switch/switch';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<SwitchJSX, { 
  onPlusChange: 'onChange',
}>

export const Switch = proxy<HTMLPlusSwitchElement, Renamed>(
  'plus-switch', 
  ['checked', 'disabled', ], 
  ['plusChange', ],
);