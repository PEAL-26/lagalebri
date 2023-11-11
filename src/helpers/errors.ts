import { HttpException, HttpStatus } from '@nestjs/common';

interface NotificationErrorProps {
  message: string;
  name: string;
}

abstract class ErrorCustom extends Error {
  public errors: NotificationErrorProps[] = [];
}

export class NotFoundError extends ErrorCustom {
  constructor(entity = '') {
    super();
    this.errors.push({ message: `${entity} não existe.`, name: 'NotFound' });
  }
}

export class DeletedError extends ErrorCustom {
  constructor(entity = '') {
    super();
    this.errors.push({ message: `${entity} não existe.`, name: 'Deleted' });
  }
}

export class ExistError extends ErrorCustom {
  constructor(entity = '') {
    super();
    this.errors.push({
      message: `${entity} já existe na base de dados.`,
      name: 'Exists',
    });
  }
}

export class InternalServerError extends HttpException {
  constructor() {
    super(
      {
        message:
          'Ocorreu uma falha no sistema. Por favor, entre em contacto com o suporte ou tente mais tarde.',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}

export function VerifyError(error: any) {
  if (error?.errors) {
    throw new HttpException(error.errors, HttpStatus.BAD_REQUEST);
  }

  throw new InternalServerError();
}
