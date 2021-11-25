export interface VscodeOptions {
    dist: string;
    prefix: string;
}

export const vscode = (options: VscodeOptions) => {

    const name = 'vscode';

    const next = (context) => {

    }

    return {
        name,
        next,
    }
}