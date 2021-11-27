import { Literal } from '@babel/types';

// TODO: return type
export const getInitializer = (node: Literal) => {

    if (!node) return node;

    const value = node;

    if (!value) return;

    const extra = value.extra || {};

    return extra.raw || value['value'];
}