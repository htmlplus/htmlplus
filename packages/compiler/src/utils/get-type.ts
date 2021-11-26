import { parse } from '@babel/parser';
import babelTraverse from '@babel/traverse';
import fs from 'fs-extra';
import { dirname, resolve } from 'path';

// TODO
const traverse = babelTraverse.default || babelTraverse;

export const getType = (file, node, { directory }) => {

    if (node.type != 'TSTypeReference') return node;

    let result;

    traverse(file, {
        ClassDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
        ImportDeclaration(path) {

            for (const specifier of path.node.specifiers) {

                const alias = specifier.local.name;

                if (alias != node.typeName.name) continue;

                let key;

                switch (specifier.type) {

                    case 'ImportNamespaceSpecifier':
                        key = '*';
                        break;

                    case 'ImportDefaultSpecifier':
                        key = 'default';
                        break;

                    case 'ImportSpecifier':
                        key = specifier.imported.name;
                        break;
                }

                try {

                    const filename = resolve(directory, path.node.source.value + '.ts');

                    path.$ast = path.$ast || parse(
                        fs.readFileSync(filename, 'utf8'),
                        {
                            allowImportExportEverywhere: true,
                            plugins: [
                                'typescript'
                            ],
                            ranges: false,
                        }
                    );

                    result = getType(
                        path.$ast,
                        node,
                        {
                            directory: dirname(filename),
                        }
                    );
                }
                catch { }

                path.stop();

                break;
            }
        },
        TSInterfaceDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
        TSTypeAliasDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
    });

    return result || node;
};