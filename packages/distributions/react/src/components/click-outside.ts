/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/click-outside';
import type { ClickOutsideJSX as ClickOutsideJSX } from '@htmlplus/core/types/components/click-outside/click-outside';

type Renamed = Rename<ClickOutsideJSX, { 
  onPlusClickOutside: 'onClickOutside',
}>

export const ClickOutside = proxy<HTMLPlusClickOutsideElement, Renamed>(
  'plus-click-outside', 
  ['disabled', 'once', ], 
  ['plusClickOutside', ],
);