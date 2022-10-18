/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/tabs-panels';
import type { TabsPanelsJSX as TabsPanelsJSX } from '@htmlplus/core/types/components/tabs-panels/tabs-panels';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<TabsPanelsJSX, { 
}>

export const TabsPanels = proxy<HTMLPlusTabsPanelsElement, Renamed>(
  'plus-tabs-panels', 
  ['connector', ], 
  [],
);