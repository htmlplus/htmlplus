/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/portal';
import type { PortalJSX as PortalJSX } from '@htmlplus/core/types/components/portal/portal';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<PortalJSX, { 
}>

export const Portal = proxy<HTMLPlusPortalElement, Renamed>(
  'plus-portal', 
  ['disabled', 'strategy', 'target', ], 
  [],
);