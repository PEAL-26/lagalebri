import { VerifyError } from '@/helpers/errors';
import { Controller, Get, Query } from '@nestjs/common';

import { ListUserQueryDto } from './dtos/list-user-dto';
import { UserCRUDUseCases } from '@/domain/use-cases/users';

@Controller('users')
export class ListUserController {
  constructor(private useCase: UserCRUDUseCases) {}

  @Get()
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
