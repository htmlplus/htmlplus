const LZString = require('lz-string');

const compress = (input) => {
    return LZString.compressToBase64(JSON.stringify(input)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

const getEventName = (input) => {

    const event = input.replace('on', '');

    return event.charAt(0).toLowerCase() + event.slice(1);
}

const indent = (input, level = 1) => {

    let space = '';

    for (let i = 0; i < level; i++) space += '  ';

    const lines = input.split('\n');

    return lines.map((line, index) => `${index === 0 ? '' : space}${line}`).join('\n');
}

const render = (items, level = 0) => {

    return items.map((item) => {

        if (Array.isArray(item)) {

            return render(item.filter((item) => item !== null), level + 1);
        }
        else {

            if (typeof item === 'undefined') return null;

            let space = '';

            for (let i = 0; i < level; i++) space += '  ';

            return space + item;
        }
    })
        .filter((item) => item !== null)
        .join('\n');
}

const toCamelCase = (input) => {

    if (!input) return input;

    // TODO
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '').replace(/-/g, '');
}

const toCapitalCase = (input) => {

    if (!input) return input;

    return input.replace(/^\w/, (char) => char.toUpperCase());
}

const toPascalCase = (input) => {

    if (!input) return input;

    return input.toLowerCase()
        .split('-')
        .map((segment) => toCapitalCase(segment))
        .join('');
}

module.exports = {
    compress,
    getEventName,
    indent,
    render,
    toCamelCase,
    toCapitalCase,
    toPascalCase,
}