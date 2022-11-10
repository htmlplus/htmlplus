import { paramCase } from 'change-case';

export const classes = (...inputs: any[]): string => {
  const names = [];
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    const type = Object.prototype.toString.call(element);
    switch (type) {
      case '[object Array]':
        names.push(classes(element));
        break;
      case '[object Object]':
        const keys = Object.keys(element);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          const value = element[key];
          key = paramCase(key);
          const type = Object.prototype.toString.call(value);
          switch (type) {
            case '[object Boolean]':
              value && names.push(`${key}`);
              break;
            case '[object Number]':
              names.push(`${key}-${value}`);
              break;
            case '[object String]':
              switch (value) {
                case '':
                case 'true':
                  names.push(`${key}`);
                  break;
                case 'false':
                  break;
                default:
                  names.push(`${key}-${value}`);
                  break;
              }
              break;
          }
        }
        break;
      case '[object String]':
        names.push(element);
        break;
    }
  }
  return names.join(' ');
};
