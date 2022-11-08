/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/sticky';
import type { StickyJSX } from '@htmlplus/core/types/components/sticky/sticky';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  StickyJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const Sticky = proxy<HTMLPlusStickyElement, Renamed>(
  'plus-sticky',
  ['disabled', 'top', 'watcher', 'zIndex'],
  ['plusChange']
);
