/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/breadcrumb';
import type { BreadcrumbJSX as BreadcrumbJSX } from '@htmlplus/core/types/components/breadcrumb/breadcrumb';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<BreadcrumbJSX, { 
}>

export const Breadcrumb = proxy<HTMLPlusBreadcrumbElement, Renamed>(
  'plus-breadcrumb', 
  ['expanderText', 'offset', 'max', 'separator', ], 
  [],
);