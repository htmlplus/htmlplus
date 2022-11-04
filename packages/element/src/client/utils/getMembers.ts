import * as CONSTANTS from '../../constants/index.js';
import { PlusElement } from '../../types';

// TODO
export const getMembers = (
  target: PlusElement
): {
  [member: string]: {
    default?: any;
    type?: any;
  };
} => {
  return target.constructor[CONSTANTS.STATIC_MEMBERS] || target[CONSTANTS.STATIC_MEMBERS] || {};
};
