/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/card';
import type { CardJSX as CardJSX } from '@htmlplus/core/types/components/card/card';

type Renamed = Rename<CardJSX, { 
}>

export const Card = proxy<HTMLPlusCardElement, Renamed>(
  'plus-card', 
  ['elevation', 'flat', 'outlined', 'tile', ], 
  [],
);