import { createSlug } from '@/helpers/slug';

// Descreva o conjunto de testes para createSlug
describe('createSlug', () => {
  test('Deve criar um slug em minúsculas', () => {
    const inputString = 'Isso é um Teste';
    const expectedSlug = 'isso-e-um-teste';
    const result = createSlug(inputString);
    expect(result).toBe(expectedSlug);
  });

  test('Deve substituir espaços por hífens', () => {
    const inputString = 'substituir espaços';
    const expectedSlug = 'substituir-espaços';
    const result = createSlug(inputString);
    expect(result).toBe(expectedSlug);
  });

  test('Deve remover caracteres especiais', () => {
    const inputString = 'remover!@#caracteres#especiais';
    const expectedSlug = 'remover-caracteres-especiais';
    const result = createSlug(inputString);
    expect(result).toBe(expectedSlug);
  });

  test('Deve lidar com várias alterações ao mesmo tempo', () => {
    const inputString = '  Caracteres ãé@ # Especiais  ';
    const expectedSlug = 'caracteres-ae-especiais';
    const result = createSlug(inputString);
    expect(result).toBe(expectedSlug);
  });
});
