/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/switch';
import type { SwitchJSX } from '@htmlplus/core/types/components/switch/switch';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  SwitchJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const Switch = proxy<HTMLPlusSwitchElement, Renamed>('plus-switch', ['checked', 'disabled'], ['plusChange']);
