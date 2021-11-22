import fs from 'fs';

export const read = () => {

    const name = 'read';

    const cache = (context) => !!context.content;

    const next = (context) => {
        context.content = fs.readFileSync(context.filename, 'utf8');
    }

    return {
        name,
        cache,
        next,
    }
}