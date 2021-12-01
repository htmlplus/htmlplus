import t, { TSTypeAnnotation } from '@babel/types';
import { Context } from '@app/types';
import { toPascalCase, visitor } from '../utils';

export interface TypeOptions {
    prefix?: string;
}

export const type = (options: TypeOptions) => {

    const name = 'type';

    const next = (context: Context) => {

        // TODO
        const v5 = toPascalCase(options.prefix || '') + context.name;
        const v6 = `HTML${v5}Element`;
        
        visitor(context.ast as any, {
            Program(path) {
                path.node.body.push(
                    Object.assign(
                        t.tsModuleDeclaration(
                            t.identifier('global'),
                            t.tsModuleBlock(
                                [
                                    t.tsInterfaceDeclaration(
                                        t.identifier(v6),
                                        null,
                                        [],
                                        t.tsInterfaceBody([
                                            ...context.properties.slice(0, 1).map((property) => Object.assign(
                                                t.tSPropertySignature(
                                                    property.key,
                                                    property.typeAnnotation as TSTypeAnnotation
                                                ),
                                                {
                                                    optional: property.optional,
                                                    leadingComments: property.leadingComments
                                                }
                                            ))
                                        ])
                                    ),
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
                                    ), 
                                    t.tsInterfaceDeclaration(
                                        t.identifier(v5),
                                        null,
                                        [],
                                        t.tsInterfaceBody([
                                            ...context.properties.slice(0, 1).map((property) => Object.assign(
                                                t.tSPropertySignature(
                                                    property.key,
                                                    property.typeAnnotation as TSTypeAnnotation
                                                ),
                                                {
                                                    optional: property.optional,
                                                    leadingComments: property.leadingComments
                                                }
                                            ))
                                        ])
                                    ),
                                    t.tsInterfaceDeclaration(
                                        t.identifier('HTMLElementTagNameMap'),
                                        null,
                                        [],
                                        t.tsInterfaceBody(
                                            [
                                                t.tSPropertySignature(
                                                    t.stringLiteral(context.tag),
                                                    t.tSTypeAnnotation(
                                                        t.tSIntersectionType(
                                                            [
                                                                t.tSTypeReference(
                                                                    t.identifier(v5)
                                                                )
                                                            ]
                                                        )
                                                    )
                                                )
                                            ]
                                        )
                                    )
                                ]
                            )
                        ),
                        {
                            declare: true,
                            global: true,
                        }
                    )
                )
            }
        })
    }

    return {
        name,
        next,
    }
}