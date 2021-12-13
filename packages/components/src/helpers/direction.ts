import { getComputedStyle } from './get-computed-style';
import { host } from '@htmlplus/compiler/client';

export const direction = (target) => getComputedStyle(host(target), 'direction').toLowerCase();