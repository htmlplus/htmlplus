/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/click-outside/click-outside';
import type { ClickOutsideJSX as Type } from '@htmlplus/core/dist/components/click-outside/click-outside';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusClickOutside: 'onClickOutside',
}>

export const ClickOutside = /*@__PURE__*/ proxy<HTMLClickOutsideElement, Renamed>(
  'plus-click-outside', 
  ['disabled', 'once', ], 
  ['plusClickOutside', ],
);