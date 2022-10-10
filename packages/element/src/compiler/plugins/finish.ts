export const finish = (callback: () => void) => {
  const name = 'finish';

  const finish = () => {
    callback();
  }

  return { name, finish };
};
