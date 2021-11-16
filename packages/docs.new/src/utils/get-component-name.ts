import * as Case from 'case';

export const getComponentName = (framework, input) => {

    if (!input) return input;

    if (framework !== 'react') return input;

    return Case.pascal(input);
}