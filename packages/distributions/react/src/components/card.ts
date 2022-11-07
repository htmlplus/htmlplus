/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import '@htmlplus/core/card';
import type { CardJSX } from '@htmlplus/core/types/components/card/card';

import { proxy } from '../proxy';
import type { Rename } from '../proxy';

type Renamed = Rename<CardJSX, {}>;

export const Card = proxy<HTMLPlusCardElement, Renamed>('plus-card', ['elevation', 'flat', 'outlined', 'tile'], []);
