export class ErrorCustom extends Error {
  errors: any;

  constructor(errors: any) {
    super();

    this.errors = errors;
  }
}

export function errorCustomToString(catchError: any): string {
  let errors = '';

  if (catchError?.errors) {
    if (Array.isArray(catchError.errors)) {
      errors = catchError.errors.map((error: any) => error.message).join('\n');
    } else {
      errors = catchError.errors.message;
    }
  }

  if (catchError instanceof Error) return catchError.message;

  return errors;
}
