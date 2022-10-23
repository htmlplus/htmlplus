/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/animation';
import type { AnimationJSX as AnimationJSX } from '@htmlplus/core/types/components/animation/animation';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<AnimationJSX, { 
  onPlusCancel: 'onCancel',
  onPlusFinish: 'onFinish',
  onPlusRemove: 'onRemove',
  onPlusStart: 'onStart',
}>

export const Animation = proxy<HTMLPlusAnimationElement, Renamed>(
  'plus-animation', 
  ['composite', 'delay', 'direction', 'duration', 'easing', 'endDelay', 'fill', 'iterationComposite', 'iterations', 'iterationStart', 'keyframes', 'name', 'play', 'playbackRate', 'state', ], 
  ['plusCancel', 'plusFinish', 'plusRemove', 'plusStart', ],
);