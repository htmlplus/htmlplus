/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dialog-toggler';
import type { DialogTogglerJSX as DialogTogglerJSX } from '@htmlplus/core/types/components/dialog-toggler/dialog-toggler';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<DialogTogglerJSX, { 
}>

export const DialogToggler = proxy<HTMLPlusDialogTogglerElement, Renamed>(
  'plus-dialog-toggler', 
  ['connector', ], 
  [],
);