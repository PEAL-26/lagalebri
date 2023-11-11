import { camelCase, snakeCase } from 'case-anything';

const validateObject = <T>(obj: T) => {
  // verifica se obj é um objeto
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Objeto inválido!');
  }
};

export const toCamelCase = <T>(obj: any) => {
  validateObject(obj);

  const convertedObject = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = camelCase(key); // converte snake_case para camelCase
    convertedObject[newKey] = value;
  }

  return convertedObject as T;
};

export const toSnakeCase = (obj: any) => {
  validateObject(obj);

  const convertedObject = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = snakeCase(key); // converte camelCase para snake_Case
    convertedObject[newKey] = value;
  }

  return convertedObject;
};
