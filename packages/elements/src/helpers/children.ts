import { host } from '@htmlplus/element/client';

export const children = (target) => Array.from(host(target).children);