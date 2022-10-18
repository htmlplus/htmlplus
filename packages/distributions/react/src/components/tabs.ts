/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/tabs';
import type { TabsJSX as TabsJSX } from '@htmlplus/core/types/components/tabs/tabs';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<TabsJSX, { 
  onPlusChange: 'onChange',
}>

export const Tabs = proxy<HTMLPlusTabsElement, Renamed>(
  'plus-tabs', 
  ['value', 'vertical', 'connector', ], 
  ['plusChange', ],
);