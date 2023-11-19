import { VerifyError } from '@/helpers/errors';
import { Controller, Post, Body } from '@nestjs/common';

import { Admin } from '@/modules/auth/constants';
import { UserCRUDUseCases } from '@/domain/use-cases/users';

import { CreateUserBody } from './dtos/create-user-dto';
import { UserViewModel } from '../view-models/user-model-view';

@Controller('users')
export class CreateUserController {
  constructor(private useCase: UserCRUDUseCases) {}

  @Post()
  @Admin()
  async handle(@Body() body: CreateUserBody) {
    try {
      const { name, email, phone, notification, type, avatar } = body;

      const { user } = await this.useCase.create({
        name,
        email,
        phone,
        notification,
        type,
        avatar,
      });

      return UserViewModel.toHTTP(user);
    } catch (error) {
      VerifyError(error);
    }
  }
}
