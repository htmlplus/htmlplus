/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
 
import { Tabs } from './tabs';
import type { TabsJSX as TabsJSX } from '@htmlplus/core/types/components/tabs/tabs';

import { TabsBar } from './tabs-bar';
import type { TabsBarJSX as TabsBarJSX } from '@htmlplus/core/types/components/tabs-bar/tabs-bar';

import { TabsPanel } from './tabs-panel';
import type { TabsPanelJSX as TabsPanelJSX } from '@htmlplus/core/types/components/tabs-panel/tabs-panel';

import { TabsPanels } from './tabs-panels';
import type { TabsPanelsJSX as TabsPanelsJSX } from '@htmlplus/core/types/components/tabs-panels/tabs-panels';

import { TabsTab } from './tabs-tab';
import type { TabsTabJSX as TabsTabJSX } from '@htmlplus/core/types/components/tabs-tab/tabs-tab';


const All = Object.assign(
  Tabs as TabsJSX,
  {
    Bar: TabsBar as TabsBarJSX,
    Panel: TabsPanel as TabsPanelJSX,
    Panels: TabsPanels as TabsPanelsJSX,
    Tab: TabsTab as TabsTabJSX,
  }
);

export { All as Tabs }