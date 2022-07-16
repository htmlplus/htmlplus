/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dialog-body';
import type { DialogBodyJSX as Type } from '@htmlplus/core/types/components/dialog-body/dialog-body';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const DialogBody = /*@__PURE__*/ proxy<HTMLDialogBodyElement, Renamed>(
  'plus-dialog-body', 
  ['scrollable', ], 
  [],
);