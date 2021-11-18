import babelGenerator from '@babel/generator';
import t from '@babel/types';

// TODO
const generator = babelGenerator.default || babelGenerator;

export const types = (config) => {

    const interfaces = [];

    const next = (context) => {

        const ast = t.tsInterfaceDeclaration(
            context.asts.class.id,
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

        interfaces.push(ast);
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
                            t.tsModuleBlock([])
                        ),
                        {
                            declare: true,
                            global: true,
                        }
                    ),
                    Object.assign(
                        t.tsModuleDeclaration(
                            t.identifier('LocalJSX'),
                            t.tsModuleBlock([])
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