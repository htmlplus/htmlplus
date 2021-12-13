import { host } from '@htmlplus/compiler/client';

export const children = (target) => Array.from(host(target).children);