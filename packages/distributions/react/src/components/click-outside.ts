/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/click-outside';
import type { ClickOutsideJSX } from '@htmlplus/core/types/components/click-outside/click-outside';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  ClickOutsideJSX,
  {
    onPlusClickOutside: 'onClickOutside';
  }
>;

export const ClickOutside = proxy<HTMLPlusClickOutsideElement, Renamed>(
  'plus-click-outside',
  ['disabled', 'once'],
  ['plusClickOutside']
);
