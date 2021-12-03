import { isServer } from '../../utils';

// TODO: input type
export const define = (name: string, Class: any) => {

    if (isServer()) return;

    customElements.define(name, Class);
};