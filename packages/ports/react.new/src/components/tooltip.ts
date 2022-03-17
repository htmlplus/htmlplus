/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/tooltip/tooltip';
import type { TooltipJSX as Type } from '@htmlplus/components/dist/components/tooltip/tooltip';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const Tooltip = /*@__PURE__*/ proxy<HTMLTooltipElement, Renamed>(
  'plus-tooltip', 
  ['animation', 'appendTo', 'arrow', 'delay', 'disabled', 'flip', 'fixed', 'placement', 'trigger', ], 
  [],
);