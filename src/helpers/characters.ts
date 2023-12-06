// eslint-disable-next-line @typescript-eslint/no-var-requires
const unidecode = require('unidecode');

export function removeSpecialCharacters(str: string) {
  //Converte os dados em UTF-8 em caracteres US-ASCII
  const decoded = unidecode(str);

  return decoded.replace(/[^\w\s]/gi, '');
}
