import * as esbuild from 'esbuild';
import { Context } from '../types/index.js';

export const typescript = () => {

    const name = 'typescript';

    const next = (context: Context) => {

        const { code, map, warnings } = esbuild.transformSync(
            context.script || '',
            {
                loader: 'ts'
            }
        );

        context.script = code;
        // console.log(code)
    }

    return {
        name,
        next,
    }
}

// import ts from 'typescript';

// function compile(fileNames: string[], options: ts.CompilerOptions): void {
//   // Create a Program with an in-memory emit
//   const createdFiles = {};
//   const host = ts.createCompilerHost(options);
//   host.writeFile = (fileName: string, contents: string) =>
//     (createdFiles[fileName] = contents);

//   // Prepare and emit the d.ts files
//   const program = ts.createProgram(fileNames, options, host);
//   program.emit();

//   // Loop through all the input files
//   fileNames.forEach((file) => {
//     console.log('### JavaScript\n');
//     console.log(host.readFile(file));

//     console.log('### Type Definition\n');
//     const dts = file.replace('.js', '.d.ts');
//     console.log(createdFiles);
//   });
// }

// compile(['src/aspect-ratio'], {
//   declaration: true,
//   emitDeclarationOnly: true,
// });