/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/tabs';
import type { TabsJSX as TabsJSX } from '@htmlplus/core/types/components/tabs/tabs';

type Renamed = Rename<TabsJSX, { 
  onPlusChange: 'onChange',
}>

export const Tabs = proxy<HTMLPlusTabsElement, Renamed>(
  'plus-tabs', 
  ['value', 'vertical', 'connector', ], 
  ['plusChange', ],
);