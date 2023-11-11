// eslint-disable-next-line @typescript-eslint/no-var-requires
const unidecode = require('unidecode');

export function createSlug(input: string): string {
  const slug = unidecode(input);

  return slug
    .toLowerCase() // Converte para minúsculas
    .replace(/[^a-zA-Z0-9-]+/g, '-') // Remove caracteres especiais, exceto hífens
    .replace(/^-+|-+$/g, '') // Remove hífens no início e no final
    .replace(/--+/g, '-') // Substitui múltiplos hífens por um único hífen
    .trim(); // Remove espaços em branco no início e no final
}
