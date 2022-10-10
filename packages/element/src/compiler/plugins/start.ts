export const start = (callback: () => void) => {
  const name = 'start';

  const start = () => {
    callback();
  }

  return { name, start };
};
