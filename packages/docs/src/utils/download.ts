export const download = (content, type, filename) => {

  const blob = new Blob([content], { type });

  const url = URL.createObjectURL(blob);

  const anchor = document.createElement('a');

  anchor.href = url;

  anchor.download = filename;

  document.body.appendChild(anchor);

  anchor.click();

  document.body.removeChild(anchor);

  URL.revokeObjectURL(url);
}

// download('test', 'application/json', 'a.txt');
