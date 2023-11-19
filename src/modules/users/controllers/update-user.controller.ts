import { VerifyError } from '@/helpers/errors';
import { Controller, Body, Param, Put } from '@nestjs/common';

import { UserCRUDUseCases } from '@/domain/use-cases/users';

import { UpdateUserBody } from './dtos/update-user-dto';
import { UserViewModel } from '../view-models/user-model-view';

@Controller('users')
export class UpdateUserController {
  constructor(private useCase: UserCRUDUseCases) {}

  @Put(':id')
  async handle(@Param('id') id: string, @Body() body: UpdateUserBody) {
    try {
      const { name, email, phone, notification, type, avatar } = body;
      const { user } = await this.useCase.update({
        id,
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
