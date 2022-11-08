/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/scroll-indicator';
import type { ScrollIndicatorJSX } from '@htmlplus/core/types/components/scroll-indicator/scroll-indicator';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  ScrollIndicatorJSX,
  {
    onPlusScroll: 'onScroll';
  }
>;

export const ScrollIndicator = proxy<HTMLPlusScrollIndicatorElement, Renamed>(
  'plus-scroll-indicator',
  ['disabled', 'source'],
  ['plusScroll']
);
