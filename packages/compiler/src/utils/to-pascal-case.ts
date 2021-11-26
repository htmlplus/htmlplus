export const toPascalCase = (input) => {

    if (!input) return input;

    return input[0].toUpperCase() + input.slice(1);
}