/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/grid-item/grid-item';
import type { GridItemJSX as Type } from '@htmlplus/components/dist/components/grid-item/grid-item';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const GridItem = /*@__PURE__*/ proxy<HTMLGridItemElement, Renamed>(
  'plus-grid-item', 
  ['alignSelf', 'alignSelfXs', 'alignSelfSm', 'alignSelfMd', 'alignSelfLg', 'alignSelfXl', 'alignSelfXxl', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'hideXs', 'hideSm', 'hideMd', 'hideLg', 'hideXl', 'hideXxl', 'hide', 'hideSmUp', 'hideMdUp', 'hideLgUp', 'hideXlUp', 'hideSmDown', 'hideMdDown', 'hideLgDown', 'hideXlDown', 'hideXxlDown', 'offsetXs', 'offsetSm', 'offsetMd', 'offsetLg', 'offsetXl', 'offsetXxl', 'orderXs', 'orderSm', 'orderMd', 'orderLg', 'orderXl', 'orderXxl', ], 
  [],
);