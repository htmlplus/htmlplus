import babelTraverse from '@babel/traverse';
import fs from 'fs-extra';
import path from 'path';
import * as CONSTANTS from '../configs/constants';
import { hasDecorator, toCapitalCase, toKebabCase } from '../utils';

// TODO     
const traverse = babelTraverse.default || babelTraverse;

export interface ExtractOptions {
    prefix?: string;
}

export const extract = (options: ExtractOptions) => {

    const name = 'extract';

    const next = (context) => {

        const additions: Array<any> = [];

        traverse(context.ast, {
            ClassDeclaration: {
                exit(path) {

                    context.component = path.node;

                    context.members = context.component.body.body;

                    path.skip();
                }
            },
            Decorator(path) {

                const { name } = path.node.expression.callee;

                if (
                    ![
                        CONSTANTS.TOKEN_DECORATOR_COMPONENT,
                        CONSTANTS.TOKEN_DECORATOR_METHOD,
                    ].includes(name)
                ) return;

                additions.push(path);
            }
        });

        context.directory = path.dirname(context.filename);

        context.name = context.component.id.name;

        context.key = toKebabCase(context.name);

        context.tag = `${options.prefix}-${context.key}`;

        context.title = toCapitalCase(context.key);

        (() => {

            const stylePath = path.join(context.directory, `${context.key}.scss`);

            if (!fs.existsSync(stylePath)) return;

            context.stylePath = stylePath;
        })();

        context.attributes = context
            .members
            .filter((member) => hasDecorator(member, CONSTANTS.TOKEN_DECORATOR_ATTRIBUTES));

        context.events = context
            .members
            .filter((member) => hasDecorator(member, CONSTANTS.TOKEN_DECORATOR_EVENT));

        context.methods = context
            .members
            .filter((member) => hasDecorator(member, CONSTANTS.TOKEN_DECORATOR_METHOD));

        context.properties = context
            .members
            .filter((member) => hasDecorator(member, CONSTANTS.TOKEN_DECORATOR_PROPERTY));

        context.slots = context
            .members
            .filter((member) => hasDecorator(member, CONSTANTS.TOKEN_DECORATOR_SLOTS));

        context.states = context
            .members
            .filter((member) => hasDecorator(member, CONSTANTS.TOKEN_DECORATOR_STATE));

        context.hasMount = context
            .members
            .some((member) => member.key.name === CONSTANTS.TOKEN_LIFECYCLE_MOUNT);

        context.hasUnmount = context
            .members
            .some((member) => member.key.name === CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT);

        context.render = context
            .members
            .some((member) => member.key.name === CONSTANTS.TOKEN_METHOD_RENDER);

        additions.forEach((path) => path.remove());
    }

    return {
        name,
        next,
    }
}