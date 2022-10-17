/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dialog-footer';
import type { DialogFooterJSX as Type } from '@htmlplus/core/types/components/dialog-footer/dialog-footer';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const DialogFooter = proxy<HTMLPlusDialogFooterElement, Renamed>(
  'plus-dialog-footer', 
  [], 
  [],
);