import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types/index.js';

export const getMembersKey = (target: PlusElement): string[] => {
  return Object.keys(target.constructor[CONSTANTS.STATIC_MEMBERS] || target[CONSTANTS.STATIC_MEMBERS] || {});
};
