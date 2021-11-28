import Case from 'case';

export const toCamelCase = (input: string): string => {

    if (!input) return input;

    return Case.camel(input);
}