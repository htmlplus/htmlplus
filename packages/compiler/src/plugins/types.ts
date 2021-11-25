export interface TypesOptions {
    dist: string;
}

export const types = (options: TypesOptions) => {

    const name = 'types';

    const next = (context) => {

    }

    return {
        name,
        next,
    }
}