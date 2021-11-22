import babelGenerator from '@babel/generator';
import t from '@babel/types';

// TODO
const generator = babelGenerator.default || babelGenerator;

export const types = (config) => {

    const interfaces = [];

    const globals = [];

    const locals = [];

    const tags = [];

    // TODO
    const xxx = '@stencil/core';
    const jSXBase = 'JSXBase';
    const localJSX = 'LocalJSX'
    const components = 'Components';

    const next = (context) => {

        // TODO
        const name = `Plus${context.asts.class.id.name}`;
        const elementInterface = `HTML${name}Element`;

        interfaces.push(
            t.tsInterfaceDeclaration(
                t.identifier(name),
                null,
                [],
                t.tsInterfaceBody(
                    context.asts.properties.map((property) => Object.assign(
                        t.tSPropertySignature(
                            property.key,
                            property.typeAnnotation,
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
                t.identifier(elementInterface),
                null,
                [
                    t.tSExpressionWithTypeArguments(
                        t.tSQualifiedName(
                            t.identifier(components),
                            t.identifier(name),
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
                            t.identifier(elementInterface),
                            {
                                typeAnnotation: t.tSTypeAnnotation(
                                    t.tSTypeLiteral(
                                        [
                                            t.tSPropertySignature(
                                                t.identifier('prototype'),
                                                t.tsTypeAnnotation(
                                                    t.tSTypeReference(t.identifier(elementInterface))
                                                )
                                            ),
                                            t.tSConstructSignatureDeclaration(
                                                null,
                                                [],
                                                t.tSTypeAnnotation(
                                                    t.tSTypeReference(t.identifier(elementInterface))
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
                t.identifier(name),
                null,
                [],
                t.tsInterfaceBody(
                    [
                        context.asts.properties.map((property) => Object.assign(
                            t.tSPropertySignature(
                                property.key,
                                property.typeAnnotation,
                                property.value
                            ),
                            {
                                optional: property.optional,
                                leadingComments: property.leadingComments
                            }
                        )),
                        context.asts.events.map((event) => Object.assign(
                            t.tSPropertySignature(
                                t.identifier(
                                    `on${event.key.name}`
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
                                                            t.tSTypeParameterInstantiation(
                                                                [
                                                                    // TODO
                                                                    t.tSAnyKeyword()
                                                                ]
                                                            )
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
                                    t.identifier(localJSX),
                                    t.identifier('PlusAspectRatio')
                                )
                            ),
                            t.tSTypeReference(
                                t.tSQualifiedName(
                                    t.identifier(jSXBase),
                                    t.identifier('HTMLAttributes')
                                ),
                                t.tSTypeParameterInstantiation(
                                    [
                                        t.tSTypeReference(t.identifier(elementInterface))
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
                            t.identifier(components),
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
                            t.identifier(localJSX),
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
                                t.identifier(localJSX),
                                t.identifier('JSX'),
                            )
                        ]
                    ),
                    Object.assign(
                        t.tsModuleDeclaration(
                            t.stringLiteral(xxx),
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
        )

        console.log(generator(ast).code)
    }

    return {
        next,
        finish,
    }
}