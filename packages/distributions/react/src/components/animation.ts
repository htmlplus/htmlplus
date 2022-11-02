/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

import '@htmlplus/core/animation';
import type { AnimationJSX as AnimationJSX } from '@htmlplus/core/types/components/animation/animation';

type Renamed = Rename<AnimationJSX, { 
  onPlusCancel: 'onCancel',
  onPlusFinish: 'onFinish',
  onPlusRemove: 'onRemove',
  onPlusStart: 'onStart',
}>

export const Animation = proxy<HTMLPlusAnimationElement, Renamed>(
  'plus-animation', 
  ['composite', 'delay', 'direction', 'duration', 'easing', 'endDelay', 'fill', 'iterationComposite', 'iterations', 'iterationStart', 'keyframes', 'name', 'play', 'playbackRate', ], 
  ['plusCancel', 'plusFinish', 'plusRemove', 'plusStart', ],
);