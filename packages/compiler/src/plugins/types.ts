import * as t from '@babel/types';
import { TSTypeAnnotation } from '@babel/types';
import * as fs from 'fs';
import * as path from 'path';
import { Context } from '../types';
import { print, toPascalCase } from '../utils';

export interface TypesOptions {
    dist: string;
    prefix?: string;
}

export const types = (options: TypesOptions) => {

    const name = 'types';

    const interfaces: Array<any> = [];

    const globals: Array<any> = [];

    const locals: Array<any> = [];

    const tags: Array<any> = [];

    // TODO
    const v1 = '@stencil/core';
    const v2 = 'JSXBase';
    const v3 = 'LocalJSX'
    const v4 = 'Components';

    const next = (context: Context) => {

        // TODO
        const v5 = toPascalCase(options.prefix || '') + context.name;
        const v6 = `HTML${v5}Element`;

        interfaces.push(
            t.tsInterfaceDeclaration(
                t.identifier(v5),
                null,
                [],
                t.tsInterfaceBody(
                    context.properties.map((property) => Object.assign(
                        t.tSPropertySignature(
                            property.key,
                            property.typeAnnotation as TSTypeAnnotation,
                            property.value
                        ),
                        {
                            optional: property.optional,
                            leadingComments: property.leadingComments
                        }
                    ))
                )
            )
        )

        globals.push(
            t.tsInterfaceDeclaration(
                t.identifier(v6),
                null,
                [
                    t.tSExpressionWithTypeArguments(
                        t.tSQualifiedName(
                            t.identifier(v4),
                            t.identifier(v5),
                        )
                    )
                ],
                t.tsInterfaceBody([])
            )
        )

        globals.push(
            t.variableDeclaration(
                'var',
                [
                    t.variableDeclarator(
                        Object.assign(
                            t.identifier(v6),
                            {
                                typeAnnotation: t.tSTypeAnnotation(
                                    t.tSTypeLiteral(
                                        [
                                            t.tSPropertySignature(
                                                t.identifier('prototype'),
                                                t.tsTypeAnnotation(
                                                    t.tSTypeReference(t.identifier(v6))
                                                )
                                            ),
                                            t.tSConstructSignatureDeclaration(
                                                null,
                                                [],
                                                t.tSTypeAnnotation(
                                                    t.tSTypeReference(t.identifier(v6))
                                                )
                                            )
                                        ]
                                    )
                                )
                            }
                        )
                    )
                ]
            )
        )

        locals.push(
            t.tsInterfaceDeclaration(
                t.identifier(v5),
                null,
                [],
                t.tsInterfaceBody(
                    [
                        context.properties.map((property) => Object.assign(
                            t.tSPropertySignature(
                                property.key,
                                property.typeAnnotation as TSTypeAnnotation,
                                property.value
                            ),
                            {
                                optional: property.optional,
                                leadingComments: property.leadingComments
                            }
                        )),
                        context.events.map((event) => Object.assign(
                            t.tSPropertySignature(
                                t.identifier(
                                    `on${toPascalCase(event.key['name'])}`
                                ),
                                t.tsTypeAnnotation(
                                    t.tSFunctionType(
                                        null,
                                        [
                                            Object.assign(
                                                t.identifier('event'),
                                                {
                                                    typeAnnotation: t.tSTypeAnnotation(
                                                        t.tSTypeReference(
                                                            t.identifier('CustomEvent'),
                                                            (() => {
                                                                try {
                                                                    return (event as any).typeAnnotation.typeAnnotation.typeParameters
                                                                }
                                                                catch { }
                                                            })()
                                                        )
                                                    )
                                                }
                                            )
                                        ],
                                        t.tSTypeAnnotation(
                                            t.tSVoidKeyword()
                                        )
                                    )
                                )
                            ),
                            {
                                optional: true,
                                leadingComments: event.leadingComments
                            }
                        ))
                    ].flat()
                )
            )
        )

        tags.push(
            t.tSPropertySignature(
                t.stringLiteral(context.tag),
                t.tSTypeAnnotation(
                    t.tSIntersectionType(
                        [
                            t.tSTypeReference(
                                t.tSQualifiedName(
                                    t.identifier(v3),
                                    t.identifier('PlusAspectRatio')
                                )
                            ),
                            t.tSTypeReference(
                                t.tSQualifiedName(
                                    t.identifier(v2),
                                    t.identifier('HTMLAttributes')
                                ),
                                t.tSTypeParameterInstantiation(
                                    [
                                        t.tSTypeReference(t.identifier(v6))
                                    ]
                                )
                            )
                        ]
                    )
                )
            )
        )
    }

    const finish = () => {

        const ast = t.file(
            t.program(
                [
                    t.exportNamedDeclaration(
                        t.tsModuleDeclaration(
                            t.identifier(v4),
                            t.tsModuleBlock(interfaces)
                        )
                    ),
                    Object.assign(
                        t.tsModuleDeclaration(
                            t.identifier('global'),
                            t.tsModuleBlock(globals)
                        ),
                        {
                            declare: true,
                            global: true,
                        }
                    ),
                    Object.assign(
                        t.tsModuleDeclaration(
                            t.identifier(v3),
                            t.tsModuleBlock(locals)
                        ),
                        {
                            declare: true,
                        }
                    ),
                    t.exportNamedDeclaration(
                        null,
                        [
                            t.exportSpecifier(
                                t.identifier(v3),
                                t.identifier('JSX'),
                            )
                        ]
                    ),
                    Object.assign(
                        t.tsModuleDeclaration(
                            t.stringLiteral(v1),
                            t.tsModuleBlock(
                                [
                                    t.exportNamedDeclaration(
                                        t.tsModuleDeclaration(
                                            t.identifier('JSX'),
                                            t.tsModuleBlock(
                                                [
                                                    t.tsInterfaceDeclaration(
                                                        t.identifier('IntrinsicElements'),
                                                        null,
                                                        [],
                                                        t.tsInterfaceBody(tags)
                                                    )
                                                ]
                                            )
                                        )
                                    )
                                ]
                            )
                        ),
                        {
                            declare: true,
                        }
                    )
                ],
                [],
                'module'
            )
        );

        // TODO
        // fs.ensureDirSync(path.dirname(options.dist));

        fs.writeFileSync(options.dist, print(ast));
    }

    return {
        name,
        next,
        finish,
    }
}