interface ConfigOptions {
  component?: {
    [key: string]: {
      property?: {
        [key: string]: any;
      };
    };
  };
}

/**
 * 1- property/attribute
 * 2- config
 * 3- default
 *
 *
 *
 * undefined ?? 1 => 1
 * null      ?? 1 => 1
 * ''        ?? 1 => ''
 * 0         ?? 1 => 0
 * false     ?? 1 => false
 *
 *
 *
 * Property | Config | Default | Result
 * ------------------------------------
 *     -    |   -    |    -    | -
 *     -    |   -    |    +    | Default
 *     -    |   +    |    -    | Config
 *     -    |   +    |    +    | Config
 *     +    |   -    |    -    | Property
 *     +    |   -    |    +    | Property
 *     +    |   +    |    -    | Property
 *     +    |   +    |    +    | Property
 */

let options: ConfigOptions = {
  component: {
    MyElement: {
      property: {
        value: 900
      }
    }
  }
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
