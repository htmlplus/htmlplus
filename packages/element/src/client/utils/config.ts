interface Options {
  // components?: {
  //   [key: string]: {
  //     property?: {
  //       [key: string]: any;
  //     };
  //   };
  // };
  // event?: {
  //   nameTransformer?: 'camel-case' | 'kebab-case' | 'lower-case ' | 'pascal-case';
  // };
}

let options: Options = {};

export const getConfig = (): Options => {
  return options;
};

export const setConfig = (config: Options) => {
  options = config || {};
};
