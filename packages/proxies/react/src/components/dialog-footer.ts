/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/dialog-footer/dialog-footer';
import type { DialogFooterJSX as Type } from '@htmlplus/core/dist/components/dialog-footer/dialog-footer';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const DialogFooter = /*@__PURE__*/ proxy<HTMLDialogFooterElement, Renamed>(
  'plus-dialog-footer', 
  [], 
  [],
);