import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';

export const getName = (target: PlusElement): string | undefined => {
  return target.constructor[CONSTANTS.STATIC_NAME] ?? target[CONSTANTS.STATIC_NAME];
};
