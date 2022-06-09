import JSZip from 'jszip';

export const zip = (options) => {
  const name = 'zip';
  const finish = (global) => {
    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    var img = zip.folder("images");
    img.file("smile.gif", 'Test');
    zip
      .generateAsync({ type: 'uint8array' })
      .then((content) => {
      });
  };
  return {
    name,
    finish
  };
};
