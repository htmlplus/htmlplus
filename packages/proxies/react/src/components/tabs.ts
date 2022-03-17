/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/tabs/tabs';
import type { TabsJSX as Type } from '@htmlplus/core/dist/components/tabs/tabs';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusChange: 'onChange',
}>

export const Tabs = /*@__PURE__*/ proxy<HTMLTabsElement, Renamed>(
  'plus-tabs', 
  ['value', 'vertical', 'connector', ], 
  ['plusChange', ],
);