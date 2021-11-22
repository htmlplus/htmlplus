export const extract = () => {

    const next = (context) => {

      if (context.skip) 
          return context.message(`Skip`);

      context.message(`Sccessfully extracted.`);
  }

  return { next }
}