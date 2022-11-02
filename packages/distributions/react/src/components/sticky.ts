/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/sticky';
import type { StickyJSX as StickyJSX } from '@htmlplus/core/types/components/sticky/sticky';

type Renamed = Rename<StickyJSX, { 
  onPlusChange: 'onChange',
}>

export const Sticky = proxy<HTMLPlusStickyElement, Renamed>(
  'plus-sticky', 
  ['disabled', 'top', 'watcher', 'zIndex', ], 
  ['plusChange', ],
);