import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';

export const getName = (target: PlusElement): string | undefined => {
  return target.constructor[CONSTANTS.STATIC_KEY] ?? target[CONSTANTS.STATIC_KEY];
};
