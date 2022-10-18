/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/tabs-bar';
import type { TabsBarJSX as TabsBarJSX } from '@htmlplus/core/types/components/tabs-bar/tabs-bar';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<TabsBarJSX, { 
}>

export const TabsBar = proxy<HTMLPlusTabsBarElement, Renamed>(
  'plus-tabs-bar', 
  ['grow', 'justify', 'reverse', ], 
  [],
);