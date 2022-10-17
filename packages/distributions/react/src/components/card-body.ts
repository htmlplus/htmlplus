/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/card-body';
import type { CardBodyJSX as Type } from '@htmlplus/core/types/components/card-body/card-body';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
}>

export const CardBody = proxy<HTMLPlusCardBodyElement, Renamed>(
  'plus-card-body', 
  [], 
  [],
);