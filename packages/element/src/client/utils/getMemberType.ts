import { PlusElement } from '../../types';

import * as CONSTANTS from '../../constants/index.js';

export const getMemberType = (target: PlusElement, key: string): string => {
  return (target.constructor[CONSTANTS.STATIC_MEMBERS] || target[CONSTANTS.STATIC_MEMBERS] || {})[key]?.[0];
};
