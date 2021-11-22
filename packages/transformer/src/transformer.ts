export const createTransformer = (...modules: Array<any>) => {

    const global = {
        contexts: {}
    };

    const start = async () => {

        for (const module of modules) {

            if (!module.start) continue;

            await module.start(global);

            // TODO
            console.log(module.name + ' => ' + 'Started successfully.');
        }
    }

    const next = async (filename: string) => {

        const context: any = {
            filename,
            log(namespace: string, message: string) {
                console.log(filename.split('\\').pop() + ' => ' + namespace + ' => ' + message);
            }
        };

        for (const module of modules) {

            if (module.cache) {

                const cache = await module.cache(context, global);

                if (cache) {

                    context.log(module.name, 'Load from cache.');

                    continue;
                }
            }

            if (module.next) {

                await module.next(context, global); 

                context.log(module.name, 'Executed successfully.');
            }
        }

        global.contexts[filename] = context;

        return context;
    }

    const finish = async () => {

        for (const module of modules) {

            if (!module.start) continue;

            await module.finish(global);

            // TODO
            console.log(module.name + ' => ' + 'Finished successfully.');
        }
    }

    return { start, next, finish }
}