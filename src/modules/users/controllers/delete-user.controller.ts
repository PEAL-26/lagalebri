import { VerifyError } from '@/helpers/errors';
import { Admin } from '@/modules/auth/constants';
import { Controller, Delete, Param } from '@nestjs/common';

import { UserCRUDUseCases } from '@/domain/use-cases/users';

@Controller('users')
export class DeleteUserController {
  constructor(private useCase: UserCRUDUseCases) {}

  @Delete(':id')
  @Admin()
  async handle(@Param('id') id: string) {
    try {
      await this.useCase.delete(id);
      return { message: 'success' };
    } catch (error) {
      VerifyError(error);
    }
  }
}
