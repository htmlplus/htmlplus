/* eslint-disable */
/* tslint:disable */

/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { proxy } from '../proxy';

import '@htmlplus/core/dist/components/cropper/cropper';
import type { CropperJSX as Type } from '@htmlplus/core/dist/components/cropper/cropper';

type Rename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : "Error: key not in T" }> = { [P in keyof T as P extends keyof R ? R[P] : P]: T[P] }

type Renamed = Rename<Type, { 
  plusReady: 'onReady',
  plusCrop: 'onCrop',
  plusZoom: 'onZoom',
}>

export const Cropper = /*@__PURE__*/ proxy<HTMLCropperElement, Renamed>(
  'plus-cropper', 
  ['area', 'aspectRatio', 'backdrop', 'background', 'disabled', 'guides', 'indicator', 'mode', 'resizer', 'resizerShape', 'responsive', 'shape', 'src', 'value', 'view', 'zoomable', 'zoomRatio', ], 
  ['plusReady', 'plusCrop', 'plusZoom', ],
);