export const toNumber = (input) => {

    if (isNaN(input)) return input;

    return parseFloat(input);
};