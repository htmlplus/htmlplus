/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/intersection';
import type { IntersectionJSX } from '@htmlplus/core/types/components/intersection/intersection';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  IntersectionJSX,
  {
    onPlusChange: 'onChange';
  }
>;

export const Intersection = proxy<HTMLPlusIntersectionElement, Renamed>(
  'plus-intersection',
  ['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'],
  ['plusChange']
);
