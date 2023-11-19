import { VerifyError } from '@/helpers/errors';
import { Public } from '@/modules/auth/constants';
import { Controller, Get, Query } from '@nestjs/common';
import { UserCRUDUseCases } from '@/domain/use-cases/users';

import { ListUserQueryDto } from './dtos/list-user-dto';

@Controller('users')
export class ListUserController {
  constructor(private useCase: UserCRUDUseCases) {}

  @Get()
  @Public()
  async handle(@Query() queries: ListUserQueryDto) {
    try {
      const { q: query, page, size } = queries;

      const { users } = await this.useCase.list({
        query,
        page,
        size,
      });

      return users;
    } catch (error) {
      VerifyError(error);
    }
  }
}
