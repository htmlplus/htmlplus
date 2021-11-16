import * as Case from 'case';

export const getPropertyName = (framework, input) => {

    if (framework !== 'react') return input;

    return Case.camel(input);
}