interface ConfigOptions {
  component?: {
    [key: string]: {
      property?: {
        [key: string]: any;
      };
    };
  };
}

let options: ConfigOptions = {
  component: {}
};

export const getConfig = (...parameters: string[]): any => {
  let config = options;
  for (const parameter of parameters) {
    if (!config) break;
    config = config[parameter];
  }
  return config;
};

export const setConfig = (config: ConfigOptions, replace?: boolean) => {
  options = Object.assign({ component: {} }, config);
};
