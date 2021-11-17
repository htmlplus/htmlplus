export const toKebabCase = (input) => {

    if (!input) return input;

    return input.replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, '-')
        .toLowerCase();
}