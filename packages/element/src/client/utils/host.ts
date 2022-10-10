import { PlusElement } from '../../types';

import * as CONSTANTS from '../../constants/index.js';

export const host = (target: PlusElement): HTMLElement => {
  return target[CONSTANTS.API_HOST]();
};
