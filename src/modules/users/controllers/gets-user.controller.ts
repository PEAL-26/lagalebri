import { VerifyError } from '@/helpers/errors';
import { Public } from '@/modules/auth/constants';
import { Controller, Get, Param } from '@nestjs/common';

import { UserCRUDUseCases } from '@/domain/use-cases/users';
import { isEmail, isUUID } from 'class-validator';
import { UserViewModel } from '../view-models/user-model-view';

@Controller('users')
@Public()
export class GetsUserController {
  constructor(private useCase: UserCRUDUseCases) {}

  @Get(':entry')
  async handle(@Param('entry') entry: string) {
    try {
      if (isEmail(entry)) {
        const { user } = await this.useCase.getByEmail(entry);
        return UserViewModel.toHTTP(user);
      }

      if (isUUID(entry)) {
        const { user } = await this.useCase.getById(entry);
        return UserViewModel.toHTTP(user);
      }

      const { user } = await this.useCase.getByPhone(entry);
      return UserViewModel.toHTTP(user);
    } catch (error) {
      VerifyError(error);
    }
  }
}
