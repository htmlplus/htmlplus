export const toCapitalCase = (input: string) => {

    if (!input) return input;

    return input.replace(/^\w/, (char) => char.toUpperCase());
}