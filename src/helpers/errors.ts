import {
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { NotificationProps } from '@/shared/notification';

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

export class NotificationError extends Error {
  public errors: NotificationErrorProps[] = [];

  constructor(
    notifications: NotificationProps | NotificationProps[],
    ...rest: NotificationProps[]
  ) {
    super();

    if (Array.isArray(notifications)) {
      notifications.forEach((notification) => {
        this.errors.push({
          message: `${notification.property} : ${notification.message}`,
          name: 'ValidationError',
        });
      });
    } else {
      this.errors.push({
        message: `${notifications.property} : ${notifications.message}`,
        name: 'ValidationError',
      });
    }

    rest.forEach((notification) => {
      this.errors.push({
        message: `${notification.property} : ${notification.message}`,
        name: 'ValidationError',
      });
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

export function verifyError(error: any) {
  // Verificar erros personalizados
  if (error?.errors) {
    throw new HttpException({ errors: error.errors }, HttpStatus.BAD_REQUEST);
  }

  // Verificar erros do Firebase
  if (error?.errorInfo) {
    throw new HttpException(
      { errors: error.errorInfo },
      HttpStatus.BAD_REQUEST,
    );
  }

  // Verificar erros de autenticação
  if (error instanceof UnauthorizedException) {
    throw new HttpException({ errors: error }, HttpStatus.UNAUTHORIZED);
  }

  throw new InternalServerError();
}
