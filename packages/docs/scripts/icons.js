const
    fs = require('fs'),
    path = require('path'),
    root = path.resolve(__dirname);

const source = path.join(root, '../public/assets/fonts/icons.json');

const content = fs.readFileSync(source, { encoding: 'UTF-8' });

const json = JSON.parse(content);

const icons = json.icons;

const replace = (file, regexp, result) => {

    const content = fs.readFileSync(file, { encoding: 'UTF-8' });

    if (content.match(regexp)) {

        result = content.replace(regexp, result);
    }
    else {

        result = content + '\n' + result;
    }

    fs.writeFileSync(file, result);
}

(() => {

    const file = path.join(root, '../src/components/icon/icon.types.ts');

    const token = 'export type Icons = ';

    const regexp = new RegExp(`${token}(.*);`, 'g');

    const keys = icons.map((icon) => icon.properties.name);

    const result = `${token}'${keys.join('\' | \'')}';`;

    replace(file, regexp, result);
})();

(() => {

    const file = path.join(root, '../src/components/icon/icon.variables.scss');

    const token = 'icons: ';

    const regexp = new RegExp(`${token}(.*);`, 'g');

    const keys = icons.map((icon) => `${icon.properties.name}: '\\${icon.properties.code.toString(16)}'`);

    const result = `${token}(${keys.join(', ')});`;

    replace(file, regexp, result);
})();