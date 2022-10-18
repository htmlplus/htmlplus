/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/grid';
import type { GridJSX as GridJSX } from '@htmlplus/core/types/components/grid/grid';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<GridJSX, { 
}>

export const Grid = proxy<HTMLPlusGridElement, Renamed>(
  'plus-grid', 
  ['alignContent', 'alignContentXs', 'alignContentSm', 'alignContentMd', 'alignContentLg', 'alignContentXl', 'alignContentXxl', 'alignItems', 'alignItemsXs', 'alignItemsSm', 'alignItemsMd', 'alignItemsLg', 'alignItemsXl', 'alignItemsXxl', 'gutter', 'gutterX', 'gutterY', 'justifyContent', 'justifyContentXs', 'justifyContentSm', 'justifyContentMd', 'justifyContentLg', 'justifyContentXl', 'justifyContentXxl', 'reverse', 'vertical', 'wrap', 'wrapXs', 'wrapSm', 'wrapMd', 'wrapLg', 'wrapXl', 'wrapXxl', ], 
  [],
);