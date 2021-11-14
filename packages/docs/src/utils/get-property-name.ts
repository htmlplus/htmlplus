import * as Utils from '@app/utils';

export const getPropertyName = (framework, input) => {

    if (framework !== 'react') return input;

    return Utils.toCamelCase(input);
}