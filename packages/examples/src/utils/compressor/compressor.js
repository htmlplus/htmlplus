const LZString = require('lz-string');

module.exports = (input) => {
  return LZString.compressToBase64(JSON.stringify(input)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}