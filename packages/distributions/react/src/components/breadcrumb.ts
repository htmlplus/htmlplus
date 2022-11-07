/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/breadcrumb';
import type { BreadcrumbJSX } from '@htmlplus/core/types/components/breadcrumb/breadcrumb';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<BreadcrumbJSX, {}>;

export const Breadcrumb = proxy<HTMLPlusBreadcrumbElement, Renamed>(
  'plus-breadcrumb',
  ['expanderText', 'offset', 'max', 'separator'],
  []
);
