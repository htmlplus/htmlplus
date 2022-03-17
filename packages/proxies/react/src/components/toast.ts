/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/toast/toast';
import type { ToastJSX as Type } from '@htmlplus/core/dist/components/toast/toast';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusClose: 'onClose',
  plusClosed: 'onClosed',
  plusOpen: 'onOpen',
  plusOpened: 'onOpened',
}>

export const Toast = /*@__PURE__*/ proxy<HTMLToastElement, Renamed>(
  'plus-toast', 
  ['animation', 'connector', 'duration', 'fullWidth', 'open', 'persistent', 'placement', 'reverse', 'type', ], 
  ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened', ],
);