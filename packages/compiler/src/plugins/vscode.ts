export interface VSCodeOptions {
    dist: string;
    prefix: string;
}

export const vscode = (options: VSCodeOptions) => {

    const name = 'vscode';

    const next = (context) => {

    }

    return {
        name,
        next,
    }
}