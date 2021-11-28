import Case from 'case';

export const toCapitalCase = (input: string): string => {

    if (!input) return input;

    return Case.capital(input);
}