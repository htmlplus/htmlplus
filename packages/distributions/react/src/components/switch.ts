/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/switch';
import type { SwitchJSX as SwitchJSX } from '@htmlplus/core/types/components/switch/switch';

type Renamed = Rename<SwitchJSX, { 
  onPlusChange: 'onChange',
}>

export const Switch = proxy<HTMLPlusSwitchElement, Renamed>(
  'plus-switch', 
  ['checked', 'disabled', ], 
  ['plusChange', ],
);