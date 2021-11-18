import babelGenerator from '@babel/generator';
import t from '@babel/types';

// TODO
const generator = babelGenerator.default || babelGenerator;

export const types = (config) => {

    const interfaces = [];

    const globals = [];

    const locals = [];

    const next = (context) => {

        // TODO
        const name = `Plus${context.asts.class.id.name}`;
        const elementInterface = t.identifier(`HTML${name}Element`);

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
                elementInterface,
                null,
                [
                    t.tSExpressionWithTypeArguments(
                        t.tSQualifiedName(
                            t.identifier('Components'),
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
                            elementInterface,
                            {
                                typeAnnotation: t.tSTypeAnnotation(
                                    t.tSTypeLiteral(
                                        [
                                            t.tSPropertySignature(
                                                t.identifier('prototype'),
                                                t.tsTypeAnnotation(
                                                    t.tSTypeReference(elementInterface)
                                                )
                                            ),
                                            t.tSConstructSignatureDeclaration(
                                                null,
                                                [],
                                                t.tSTypeAnnotation(
                                                    t.tSTypeReference(elementInterface)
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
    }

    const finish = () => {

        const ast = t.file(
            t.program(
                [
                    t.exportNamedDeclaration(
                        t.tsModuleDeclaration(
                            t.identifier('Components'),
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
                            t.identifier('LocalJSX'),
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
                                t.identifier('LocalJSX'),
                                t.identifier('JSX'),
                            )
                        ]
                    ),
                    Object.assign(
                        t.tsModuleDeclaration(
                            t.stringLiteral('@stencil/core'),
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
                                                        t.tsInterfaceBody(
                                                            []
                                                        )
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

        const a = generator(ast).code

        console.log(a)
    }

    return {
        next,
        finish,
    }
}