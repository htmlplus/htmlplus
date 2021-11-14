import * as Utils from '@app/utils';

export const toPascalCase = (input: string) => {

    if (!input) return input;

    return input.split('-').map((word) => Utils.toCapitalCase(word)).join('');
}