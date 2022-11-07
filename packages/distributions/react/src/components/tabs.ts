/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/tabs';
import type { TabsJSX } from '@htmlplus/core/types/components/tabs/tabs';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  TabsJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const Tabs = proxy<HTMLPlusTabsElement, Renamed>(
  'plus-tabs',
  ['value', 'vertical', 'connector'],
  ['plusChange']
);
