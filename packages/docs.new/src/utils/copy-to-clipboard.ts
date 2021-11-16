export const copyToClipboard = (text: string) => {

    const input = document.createElement('textarea');

    input.value = text;

    document.body.appendChild(input);

    input.select();

    input.setSelectionRange(0, 99999);

    document.execCommand('copy');

    input.remove();
}