/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/counter';
import type { CounterJSX as CounterJSX } from '@htmlplus/core/types/components/counter/counter';

type Renamed = Rename<CounterJSX, { 
  onPlusComplete: 'onComplete',
}>

export const Counter = proxy<HTMLPlusCounterElement, Renamed>(
  'plus-counter', 
  ['easing', 'decimal', 'decimals', 'delay', 'duration', 'from', 'play', 'separator', 'to', ], 
  ['plusComplete', ],
);