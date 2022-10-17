/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/tabs-tab';
import type { TabsTabJSX as Type } from '@htmlplus/core/types/components/tabs-tab/tabs-tab';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const TabsTab = proxy<HTMLPlusTabsTabElement, Renamed>(
  'plus-tabs-tab', 
  ['disabled', 'value', ], 
  [],
);