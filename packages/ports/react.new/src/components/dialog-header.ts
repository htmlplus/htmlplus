/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/components/dist/components/dialog-header/dialog-header';
import type { DialogHeaderJSX as Type } from '@htmlplus/components/dist/components/dialog-header/dialog-header';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const DialogHeader = /*@__PURE__*/ proxy<HTMLDialogHeaderElement, Renamed>(
  'plus-dialog-header', 
  [], 
  [],
);