/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/transition/transition';
import type { TransitionJSX as Type } from '@htmlplus/core/dist/components/transition/transition';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusCancel: 'onCancel',
  plusEnd: 'onEnd',
  plusIteration: 'onIteration',
  plusStart: 'onStart',
}>

export const Transition = /*@__PURE__*/ proxy<HTMLTransitionElement, Renamed>(
  'plus-transition', 
  ['delay', 'direction', 'duration', 'name', 'repeat', ], 
  ['plusCancel', 'plusEnd', 'plusIteration', 'plusStart', ],
);