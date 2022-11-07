/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/cropper';
import type { CropperJSX } from '@htmlplus/core/types/components/cropper/cropper';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<
  CropperJSX,
  {
    onPlusReady: 'onReady';
    onPlusCrop: 'onCrop';
    onPlusZoom: 'onZoom';
  }
>;

export const Cropper = proxy<HTMLPlusCropperElement, Renamed>(
  'plus-cropper',
  [
    'area',
    'aspectRatio',
    'backdrop',
    'background',
    'disabled',
    'guides',
    'indicator',
    'mode',
    'resizer',
    'resizerShape',
    'responsive',
    'shape',
    'src',
    'value',
    'view',
    'zoomable',
    'zoomRatio'
  ],
  ['plusReady', 'plusCrop', 'plusZoom']
);
