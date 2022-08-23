// TODO

// setConfig({
//   event: {
//     emit() {

//     },
//     rename(name) {
//       return name;
//     }
//   },
//   components: {
//     dialog: {
//       property: {
//         placement: 'center'
//       }
//     }
//   }
// })

interface Options {
  event?: {
    // emit?: () => void;
    rename?: (name: string) => string;
  };
}

let options: Options = {};

export const getConfig = (): Options => {
  return options;
}

export const setConfig = (config: Options) => {
  options = config || {};
}