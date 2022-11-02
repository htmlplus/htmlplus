/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/browse';
import type { BrowseJSX as BrowseJSX } from '@htmlplus/core/types/components/browse/browse';

type Renamed = Rename<BrowseJSX, { 
  onPlusChange: 'onChange',
  onPlusError: 'onError',
  onPlusSuccess: 'onSuccess',
}>

export const Browse = proxy<HTMLPlusBrowseElement, Renamed>(
  'plus-browse', 
  ['accept', 'disabled', 'droppable', 'min', 'max', 'minSize', 'maxSize', 'multiple', ], 
  ['plusChange', 'plusError', 'plusSuccess', ],
);