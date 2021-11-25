import generator from '@babel/generator';

export const print = (ast) => {
  return (generator.default || generator)(ast).code;
}