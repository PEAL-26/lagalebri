import { VerifyError } from '@/helpers/errors';
import { Controller, Post, Body } from '@nestjs/common';

import { UserCRUDUseCases } from '@/domain/use-cases/users';
import { UserTypeEnum } from '@/domain/entities/user';

import { CreateUserBody } from './dtos/create-user-dto';
import { UserViewModel } from '../view-models/user-model-view';

@Controller('users')
export class CreateUserController {
  constructor(private useCase: UserCRUDUseCases) {}

  @Post()
  async handle(@Body() body: CreateUserBody) {
    try {
      const {
        name = '',
        email = '',
        phone = '',
        notification = true,
        type = UserTypeEnum.NORMAL,
      } = body;

      const { user } = await this.useCase.create({
        name,
        email,
        phone,
        notification,
        type,
      });

      return UserViewModel.toHTTP(user);
    } catch (error) {
      VerifyError(error);
    }
  }
}
