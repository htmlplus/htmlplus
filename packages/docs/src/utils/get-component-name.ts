import * as Utils from '@app/utils';

export const getComponentName = (framework, input) => {

    if (!input) return input;

    if (framework !== 'react') return input;

    return Utils.toPascalCase(input);
}