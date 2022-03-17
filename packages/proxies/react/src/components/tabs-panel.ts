/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/tabs-panel/tabs-panel';
import type { TabsPanelJSX as Type } from '@htmlplus/components/dist/components/tabs-panel/tabs-panel';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const TabsPanel = /*@__PURE__*/ proxy<HTMLTabsPanelElement, Renamed>(
  'plus-tabs-panel', 
  ['value', ], 
  [],
);