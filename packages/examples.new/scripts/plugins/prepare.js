export const prepare = () => {
  const name = "prepare";
  const next = (context) => {
    context.fileContent = `
      @Element()
      class Test {
        render() {
          return (
            <> 
            </>
          );
        }
      }
    `;
  };
  return {
    name,
    next,
  };
};
