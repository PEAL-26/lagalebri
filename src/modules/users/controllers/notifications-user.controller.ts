import { verifyError } from '@/helpers/errors';
import { Controller, Post, Param, Request } from '@nestjs/common';

import { ReceiveRefuseNotificationsUseCase } from '@/domain/use-cases/users';

@Controller('users')
export class NotificationsUserController {
  constructor(private useCase: ReceiveRefuseNotificationsUseCase) {}

  @Post('notifications/receive/:id')
  async receive(@Param('id') id: string, @Request() req) {
    try {
      console.log(req.user);
      await this.useCase.receive(id);
      return { message: 'success' };
    } catch (error) {
      verifyError(error);
    }
  }

  @Post('notifications/refuse/:id')
  async refuse(@Param('id') id: string, @Request() req) {
    try {
      console.log(req.user);
      await this.useCase.refuse(id);
      return { message: 'success' };
    } catch (error) {
      verifyError(error);
    }
  }
}
