import fs from 'fs';

export const load = () => {

    const next = (context) => {

        if (context.skip) 
            return context.message(`Skip`);

        if (context.content) 
            return context.message(`Load content from cache.`);

        if (!context.filename)
            context.message(`Can not read file.`);

        context.content = fs.readFileSync(context.filename, 'utf8');

        context.message(`Sccessfully read.`);
  }

  return { next }
}