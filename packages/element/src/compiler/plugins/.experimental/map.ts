// import glob from 'fast-glob';
// import fs from 'fs';
// import path from 'path';

// export const map = (options) => {
//   const name = 'map';
//   const finish = () => {
//     const items = [];

//     const files = glob.sync([`${options?.source}/**/*.*`, `!${options?.destination}`]);

//     for (const file of files) {
//       const names = file.split(/[\/|\\]/g);

//       let state = items;

//       let current;

//       for (const name of names) {
//         current = state.find((item) => item.name == name);

//         if (!current) state.push((current = { name, items: [] }));

//         state = current.items;
//       }

//       current.isFile = true;

//       current.extension = path.extname(current.name).slice(1);

//       current.name = path.basename(current.name, path.extname(current.name));

//       current.content = fs.readFileSync(file, 'utf8');

//       delete current.items;
//     }

//     const raw = JSON.stringify(items, null, 2);

//     fs.writeFileSync(options?.destination, raw, 'utf8');
//   };
//   return {
//     name,
//     finish
//   };
// };
